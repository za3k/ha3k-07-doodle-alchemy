const game = {
    drag(card, to) {
        console.log(`Dragged ${card} to ${to}`); 
    },
};

function Card(id, draggable, html) {
    const ret = {
        id: id,
        draggable: draggable,
        html: html,
        onMouseDown: function(ev) {
            const me = $(this.html);
            // TODO: Make a (non-draggable) copy and drag that instead

            let shiftX = ev.clientX - me[0].getBoundingClientRect().left;
            let shiftY = ev.clientY - me[0].getBoundingClientRect().top;

            const moveAt = ((pageX, pageY) => {
                me.css("left", pageX - shiftX + "px");
                me.css("top", pageY - shiftY + "px");
            }).bind(this);
            moveAt(ev.pageX, ev.pageY);

            const oldParentHtml = me.parent();
            if (!oldParentHtml) throw "HUH!??";

            me.css("position", "absolute");
            me.toggleClass("dragged", true);
            me.css("zIndex", 1000);
            $("body").append(me);

            let currentDroppable = null;

            function onMouseUp(ev) {
                $(document).off("mousemove");
                me.off("mouseup");
                me.toggleClass("dragged", false);
                me.css("position", "relative");
                me.css("left","");
                me.css("top","");
                me.css("zIndex","");

                let error = "Drag tiles onto a square";
                if (currentDroppable) {
                    if (oldParentHtml[0] == document.body) debugger;
                    const oldParent = Square.fromDom(oldParentHtml);
                    const newParent = Square.fromDom($(currentDroppable));
                    error = game.onDragDrop(this, newParent);
                }
                if (error) {
                    oldParentHtml.append(me);
                }
                game.error(error);
            }

            function onMouseMove(ev) {
                moveAt(ev.pageX, ev.pageY);

                let square = null;
                // No matter what I do, this returns the svg too. this.html[0].hidden = true does nothing, which https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint supports.
                let elemsBelow = document.elementsFromPoint(ev.clientX, ev.clientY);
                for (let i=0; i<elemsBelow.length; i++)
                    if (elemsBelow[i].classList.contains("slot")) square = elemsBelow[i];
                currentDroppable = square;
            }

            $(document).on("mousemove", onMouseMove.bind(this));
            me.on("mouseup", onMouseUp.bind(this));
        }
    };
    $(ret.html).on("mousedown", ret.onMouseDown.bind(ret));
    return ret;
}

$(document).ready((ev)=> {
    $(".draggable").each((index, item) => {
        console.log("hi", index, item);
        const element = $(item).data("element");
        new Card(element, true, item);
    });
});
