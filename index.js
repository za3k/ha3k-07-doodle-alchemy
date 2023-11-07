function assert(cond, text) {
    if (!cond) console.log(text);
}

$.fn.exists = function () {
    return this.length !== 0;
}

const gameData = {
    "fire-water": "fire",
}

const game = {
    onDragDrop(card, slot) {
        slot.replaceWith(card);
        if (card.parent().hasClass("equation")) {
            const equation = card.parent();
            if (!equation.find(".slot").exists()) {
                const cards = equation.find(".card");
                assert(cards.length == 5, "Equation looks weird.");
                game.combine($(cards[0]), $(cards[2]), $(cards[4]));
            }
        }
    },
    async combine(card1, card2, outcome) {
        console.log(`${card1.data("element")} plus ${card2.data("element")} equals ${outcome}`);
        const key = `${card1.data("element")}-${card2.data("element")}`;
        if (!gameData[key]) {
            const newCard = await game.promptOldElement(card1, card2);
            //TODO: promptNewElement & game.discover(newCard);
            gameData[key] = newCard.data("element");
        }

        outcome.replaceWith(game.makeCard(gameData[key]));
        if(!$(".equations .slot").exists()) {
            game.addEmptyEquation();
        }
    },
    async promptOldElement(c1, c2) {
        $(".promptOld .discoveredElements").remove();
        $(".promptOld .equation > :nth-child(1)").replaceWith(c1.clone());
        $(".promptOld .equation > :nth-child(3)").replaceWith(c2.clone());
        $(".promptOld .equation > :nth-child(5)").replaceWith('<div class="question slot"></div>');
        $(".promptOld")
            .append($("#elements").clone())
            .show();
        $(".promptOld .draggable").each((index, item) => { new Card(item, true); });
        return c1.clone();
    },
    addEmptyEquation() {
        $(".equations").prepend('    <div class="equation"> <div class="slot"></div> <div class="card plus"></div> <div class="slot"></div> <div class="card equals"></div> <div class="card question"></div> </div>')
    },
    result(c1, c2, e1, e2) {
        if (!gameData[key]) {
            gameData[key] = p
        }
        return "fire";
    },
    makeCard(e) {
        return $('<div class="card fire" data-element="fire" ><span class="name">fire</span></div>');
    }
};

function Slot(html) {
    const ret = {
        html: html,
        acceptCard: function(card) {
            this.html.replaceWith(card);
            this.trigger("accept", card);
        }
    }
}

function Card(html, draggable) {
    const ret = {
        id: $(html).data("element"),
        draggable: draggable,
        html: html,
        copy: function(draggable) {
            return new Card($(this.html).clone()[0], draggable);
        },
        onMouseDown: function(ev) {
            //if (!this.draggable) return;
            const newCard = this.copy(true);
            const me = $(newCard.html);

            let shiftX = ev.clientX - this.html.getBoundingClientRect().left;
            let shiftY = ev.clientY - this.html.getBoundingClientRect().top;

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

                if (currentDroppable) {
                    if (oldParentHtml[0] == document.body) debugger;
                    game.onDragDrop(me, $(currentDroppable));
                } else {
                    me.remove();
                }
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
        new Card(item, true);
    });
});
