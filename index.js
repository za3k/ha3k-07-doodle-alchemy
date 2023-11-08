$.fn.exists = function () {
    return this.length !== 0;
}

$.fn.replaceWithCard = function (card) {
    const d = $(card).clone();
    new Card(d[0]);
    this.replaceWith(d);
}

const gameData = {
    art: {},
    cards: {},
};

const game = {
    async combine(card1, card2, outcome) {
        const e1=card1.data("element"), e2=card2.data("element");
        const key = e1 < e2 ? `${e1}-${e2}` : `${e2}-${e1}`;
        if (!gameData[key]) {
            const total = $("#elements > .card").length;
            const unknown = $("#elements > .question").length;
            const chance = unknown / total;
            if (chance > 0 && chance <= 0.2) chance = 0.2;
            if (Math.random() <= chance) {
                gameData[key] = await game.promptNewElement(card1, card2);
            } else {
                gameData[key] = await game.promptOldElement(card1, card2);
            }
            console.log(`${card1.data("element")} plus ${card2.data("element")} equals ${gameData[key].data("element")}`);
        }

        outcome.replaceWithCard(gameData[key]);
        if(!$(".equations .slot").exists()) {
            game.addEmptyEquation();
        }
    },
    async promptDraw() {
        const url = await game.easel.draw(10);
        const name = `doodle ${game.doodleCount++}`;
        gameData.art[name] = url;
        const image = await game.easel.makeImage(url);
        $(image).attr("draggable", "false");

        const d = $(`<div class="card art" data-element="${name}"><span class="name">${name}</span></div>`);
        d.prepend(image);
        return d;
    },
    promptWith(c1, c2, choices) { return new Promise((resolve) => {
        $(".prompt .equation").replaceWith(game.makeEmptyEquation());
        $(".prompt .equation > :nth-child(1)").replaceWith(c1.clone());
        $(".prompt .equation > :nth-child(3)").replaceWith(c2.clone());
        $(".prompt .equation > :nth-child(5)").replaceWith('<div class="question slot"></div>');

        // Slot
        $(".prompt .equation .slot").on("acceptCard", (ev, cardDiv) => {
            $(ev.target).replaceWith(cardDiv);
            $(".prompt").hide();
            if ($(cardDiv).hasClass("doodle")) {
                game.promptDraw("a new element").then(resolve);
            } else {
                resolve(cardDiv);
            }
        });

        // Choices
        $(".prompt .elements").empty().append(choices.clone());
        $(".prompt .card").each((index, item) => { new Card(item); });
        $(".prompt").show();
    }); },
    async promptOldElement(c1, c2) { 
        const card = $(await game.promptWith(c1, c2, $("#elements .card:not(.question)")));
        return card;
    },
    async promptNewElement(c1, c2) { 
        const card = $(await game.promptWith(c1, c2, $("#emoji .card")));
        this.discoverElement(card);
        return card;
    },
    makeEmptyEquation() {
        return $('<div class="equation"><div class="slot"></div><div class="symbol">+</div><div class="slot"></div><div class="symbol">➡</div> <div class="card question">?</div> </div>');
    },
    addEmptyEquation() {
        const eq = game.makeEmptyEquation();
        eq.find(".slot").on("acceptCard", function(ev, card) {
            $(ev.target).replaceWith(card);
            if (!eq.find(".slot").exists()) {
                const cards = eq.find(".card");
                game.combine($(cards[0]), $(cards[1]), $(cards[2]));
            }
        });
        $(".equations").prepend(eq);
    },
    addMysteryElement() {
        $("#elements").append('<div class="card question">?</div>');
    },
    makeDoodleCard() {
        const d = game.makeEmojiCard("doodle", "🖌️");
        d.addClass("doodle");
        return d;
    },
    discoverElement(card) {
        const name = card.data("element");
        console.log("discovered", name, card);
        gameData.cards[name] = card;
        $("#elements .question").first().replaceWithCard(card);
    },
    makeEmojiCard(name, emoji) {
        const d = $(`<div class="card" data-element="${name}">${emoji}<span class="name">${name}</span></div>`);
        new Card(d[0]);
        return d;
    }
};

function Card(html) {
    const ret = {
        html: html,
        onMouseDown: function(ev) {
            const newCard = new Card($(this.html).clone()[0]);
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
    for (var i=0; i<20; i++) game.addMysteryElement();

    game.discoverElement(game.makeEmojiCard("fire", "🔥"));
    game.discoverElement(game.makeEmojiCard("water", "🌊"));
    game.discoverElement(game.makeEmojiCard("earth", "⛰️"));
    game.discoverElement(game.makeEmojiCard("air", "💨"));
    game.addEmptyEquation();

    $("#emoji").append(game.makeDoodleCard());
    for ([e, name] of emoji) {
        $("#emoji").append(game.makeEmojiCard(name, e));
    }
    game.easel = new Easel($(".easel"));
    game.doodleCount=1;
});
