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
    async combine(card1, card2, outcome) {
        console.log(`${card1.data("element")} plus ${card2.data("element")} equals ${outcome}`);
        const e1=card1.data("element"), e2=card2.data("element");
        const key = e1 < e2 ? `${e1}-${e2}` : `${e2}-${e1}`;
        if (!gameData[key]) {
            //TODO: promptNewElement & game.discover(newCard);
            gameData[key] = await game.promptOldElement(card1, card2);
        }

        outcome.replaceWith(game.makeCard(gameData[key]));
        if(!$(".equations .slot").exists()) {
            game.addEmptyEquation();
        }
    },
    promptOldElement(c1, c2) { return new Promise((resolve) => {
        $(".promptOld .discoveredElements").remove();
        $(".promptOld .equation > :nth-child(1)").replaceWith(c1.clone());
        $(".promptOld .equation > :nth-child(3)").replaceWith(c2.clone());
        const slot = $('<div class="question slot"></div>');
        $(".promptOld .equation > :nth-child(5)").replaceWith(slot);
        $(".promptOld")
            .append($("#elements").clone())
            .show();
        $(".promptOld .draggable").each((index, item) => { new Card(item, true); });
        slot.on("acceptCard", (ev, cardDiv) => {
            $(ev.target).replaceWith(cardDiv);
            $(".promptOld").hide();
            resolve($(cardDiv).data("element"));
        });
    }); },
    addEmptyEquation() {
        const eq = $('<div class="equation"> <div class="slot"></div> <div class="card plus"></div> <div class="slot"></div> <div class="card equals"></div> <div class="card question"></div> </div>')
        eq.find(".slot").on("acceptCard", function(ev, card) {
            $(ev.target).replaceWith(card);
            if (!eq.find(".slot").exists()) {
                const cards = eq.find(".card");
                assert(cards.length == 5, "Equation looks weird.");
                game.combine($(cards[0]), $(cards[2]), $(cards[4]));
            }
        });
        $(".equations").prepend(eq);
    },
    makeCard(e) {
        const d = $(`<div class="card" data-element="${e}" ><span class="name">${e}</span></div>`);
        if (["fire", "water", "air", "earth"].indexOf(e)>=0) d.addClass(e);
        return d;
    }
};

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
                    $(currentDroppable).trigger("acceptCard", me)
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
    game.addEmptyEquation();
});
