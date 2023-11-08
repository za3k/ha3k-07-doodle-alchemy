$.fn.exists = function () {
    return this.length !== 0;
}

const gameData = {
    emoji: {},
};

const emoji="🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐦‍⬛🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🪱🐛🦋🐌🐞🐜🪰🪲🪳🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🪼🪸🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🫏🦍🦧🦣🐘🦛🦏🐪🐫🦒🦘🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🫎🐕🐩🦮🐕‍🦺🐈🐈‍⬛🪽🪶🐓🦃🦤🦚🦜🦢🪿🦩🕊🐇🦝🦨🦡🦫🦦🦥🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌴🪹🪺🪵🌱🌿☘️🍀🎍🪴🎋🍃🍂🍁🍄🐚🪨🌾💐🌷🪷🌹🥀🌺🌸🪻🌼🌻🌞🌝🌛🌜🌚🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏🪐💫⭐️🌟✨⚡️☄️💥🔥🌪🌈☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️☃️⛄️🌬💨💧💦🫧☔️☂️🌊🌫🍏🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🫛🥬🥒🌶🫑🌽🥕🫒🧄🧅🫚🥔🍠🫘🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🦴🌭🍔🍟🍕🫓🥪🥙🧆🌮🌯🫔🥗🥘🫕🥫🍝🍜🍲🍛🍣🍱🥟🦪🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🌰🥜🍯🥛🍼🫖☕️🍵🧃🥤🧋🫙🍶🍺🍻🥂🍷🫗🥃🍸🍹🧉🍾🧊🥄🍴🍽🥣🥡🥢🧂⚽️🏀🏈⚾️🥎🎾🏐🏉🥏🎱🪀🏓🏸🏒🏑🥍🏏🪃🥅⛳️🪁🏹🎣🤿🥊🥋🎽🛹🛼🛷⛸🥌🎿⛷🏂🪂🏋️‍♀️🏋️🏋️‍♂️🤼‍♀️🤼🤼‍♂️🤸‍♀️🤸🤸‍♂️⛹️‍♀️⛹️⛹️‍♂️🤺🤾‍♀️🤾🤾‍♂️🏌️‍♀️🏌️🏌️‍♂️🏇🧘‍♀️🧘🧘‍♂️🏄‍♀️🏄🏄‍♂️🏊‍♀️🏊🏊‍♂️🤽‍♀️🤽🤽‍♂️🚣‍♀️🚣🚣‍♂️🧗‍♀️🧗🧗‍♂️🚵‍♀️🚵🚵‍♂️🚴‍♀️🚴🚴‍♂️🏆🥇🥈🥉🏅🎖🏵🎗🎫🎟🎪🤹🤹‍♂️🤹‍♀️🎭🩰🎨🎬🎤🎧🎼🎹🥁🪘🪇🎷🎺🪗🎸🪕🎻🪈🎲♟🎯🎳🎮🎰🧩🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🛻🚚🚛🚜🦯🦽🦼🛴🚲🛵🏍🛺🚨🚔🚍🚘🚖🛞🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉✈️🛫🛬🛩💺🛰🚀🛸🚁🛶⛵️🚤🛥🛳⛴🚢⚓️🛟🪝⛽️🚧🚦🚥🚏🗺🗿🗽🗼🏰🏯🏟🎡🎢🛝🎠⛲️⛱🏖🏝🏜🌋⛰🏔🗻🏕⛺️🛖🏠🏡🏘🏚🏗🏭🏢🏬🏣🏤🏥🏦🏨🏪🏫🏩💒🏛⛪️🕌🕍🛕🕋⛩🛤🛣🗾🎑🏞🌅🌄🌠🎇🎆🌇🌆🏙🌃🌌🌉🌁⌚️📱📲💻⌨️🖥🖨🖱🖲🕹🗜💽💾💿📀📼📷📸📹🎥📽🎞📞☎️📟📠📺📻🎙🎚🎛🧭⏱⏲⏰🕰⌛️⏳📡🔋🪫🔌💡🔦🕯🪔🧯🛢🛍️💸💵💴💶💷🪙💰💳💎⚖️🪮🪜🧰🪛🔧🔨⚒🛠⛏🪚🔩⚙️🪤🧱⛓🧲🔫💣🧨🪓🔪🗡⚔️🛡🚬⚰️🪦⚱️🏺🔮📿🧿🪬💈⚗️🔭🔬🕳🩹🩺🩻🩼💊💉🩸🧬🦠🧫🧪🌡🧹🪠🧺🧻🚽🚰🚿🛁🛀🧼🪥🪒🧽🪣🧴🛎🔑🗝🚪🪑🛋🛏🛌🧸🪆🖼🪞🪟🛍🛒🎁🎈🎏🎀🪄🪅🎊🎉🪩🎎🏮🎐🧧✉️📩📨📧💌📥📤📦🏷🪧📪📫📬📭📮📯📜📃📄📑🧾📊📈📉🗒🗓📆📅🗑🪪📇🗃🗳🗄📋📁📂🗂🗞📰📓📔📒📕📗📘📙📚📖🔖🧷🔗📎🖇📐📏🧮📌📍✂️🖊🖋✒️🖌🖍📝✏️🔍🔎🔏🔐🔒🔓❤️🩷🧡💛💚💙🩵💜🖤🩶🤍🤎❤️‍🔥❤️‍🩹💔❣️💕💞💓💗💖💘💝💟☮️✝️☪️🪯🕉☸️✡️🔯🕎☯️☦️🛐⛎♈️♉️♊️♋️♌️♍️♎️♏️♐️♑️♒️♓️🆔⚛️🉑☢️☣️📴📳🈶🈚️🈸🈺🈷️✴️🆚💮🉐㊙️㊗️🈴🈵🈹🈲🅰️🅱️🆎🆑🅾️🆘❌⭕️🛑⛔️📛🚫💯💢♨️🚷🚯🚳🚱🔞📵🚭❗️❕❓❔‼️⁉️🔅🔆〽️⚠️🚸🔱⚜️🔰♻️✅🈯️💹❇️✳️❎🌐💠Ⓜ️🌀💤🏧🚾♿️🅿️🛗🈳🈂️🛂🛃🛄🛅🚹🚺🚼⚧🚻🚮🎦🛜📶🈁🔣ℹ️🔤🔡🔠🆖🆗🆙🆒🆕🆓0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔢#️⃣*️⃣⏏️▶️⏸⏯⏹⏺⏭⏮⏩⏪⏫⏬◀️🔼🔽➡️⬅️⬆️⬇️↗️↘️↙️↖️↕️↔️↪️↩️⤴️⤵️🔀🔁🔂🔄🔃🎵🎶➕➖➗✖️🟰♾💲💱™️©️®️〰️➰➿🔚🔙🔛🔝🔜✔️☑️🔘🔴🟠🟡🟢🔵🟣⚫️⚪️🟤🔺🔻🔸🔹🔶🔷🔳🔲▪️▫️◾️◽️◼️◻️🟥🟧🟨🟩🟦🟪⬛️⬜️🟫🔈🔇🔉🔊🔔🔕📣📢👁‍🗨💬💭🗯♠️♣️♥️♦️🃏🎴🀄️🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦🕧✢✣✤✥✦✧★☆✯✡︎✩✪✫✬✭✮✶✷✵✸✹→⇒⟹⇨⇾➾⇢☛☞➔➜➙➛➝➞♠︎♣︎♥︎♦︎♤♧♡♢♚♛♜♝♞♟♔♕♖♗♘♙⚀⚁⚂⚃⚄⚅🂠⚈⚉⚆⚇𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀇𓀈𓀉𓀊𓀋𓀌𓀍𓀎𓀏𓀐𓀑𓀒𓀓𓀔𓀕𓀖𓀗𓀘𓀙𓀚𓀛𓀜𓀝🧌🪸🪷🪹🪺🫘🫗🫙🛝🛞🛟🪬🪩🪫🩼🩻🫧🪪🟰😮‍💨😵‍💫😶‍🌫️❤️‍🔥❤️‍🩹🙏🏼✍🏼💅🏼🤳🏼💪🏼🦵🏼🦶🏼👂🏼🦻🏼👃🏼👶🏼👧🏼🧒🏼🧳🌂☂️🧵🪡🪢🪭🧶👓🕶🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩴🩱🩲🩳👙👚👛👜👝🎒👞👟🥾🥿👠👡🩰👢👑👒🎩🎓🧢⛑🪖💄💍💼👋🤚🖐✋🖖👌🤌🤏✌️🤞🫰🤟🤘🤙🫵🫱🫲🫸🫷🫳🫴👈👉👆🖕👇☝️👍👎✊👊🤛🤜👏🫶🙌👐🤲🤝🙏✍️💅🤳💪🦾🦵🦿🦶👣👂🦻👃🫀🫁🧠🦷🦴👀👁👅👄🫦💋🩸😀😃😄😁😆😅😂🤣🥲🥹☺️😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😮‍💨😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🫣🤗🫡🤔🫢🤭🤫🤥😶😶‍🌫️😐😑😬🫨🫠🙄😯😦😧😮😲🥱😴🤤😪😵😵‍💫🫥🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾";

const game = {
    async combine(card1, card2, outcome) {
        const e1=card1.data("element"), e2=card2.data("element");
        const key = e1 < e2 ? `${e1}-${e2}` : `${e2}-${e1}`;
        if (!gameData[key]) {
            const total = $("#elements > .card").length;
            const unknown = $("#elements > .question").length;
            const chanceNew = unknown / total;
            if (Math.random() <= chanceNew) {
                gameData[key] = await game.promptNewElement(card1, card2);
            } else {
                gameData[key] = await game.promptOldElement(card1, card2);
            }
            console.log(`${card1.data("element")} plus ${card2.data("element")} equals ${gameData[key]}`);
        }

        outcome.replaceWith(game.makeCard(gameData[key]));
        if(!$(".equations .slot").exists()) {
            game.addEmptyEquation();
        }
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
            resolve(cardDiv);
        });

        // Choices
        $(".prompt .elements").empty().append(choices.clone());
        $(".prompt .card").each((index, item) => { new Card(item, true); });
        $(".prompt").show();
    }); },
    async promptOldElement(c1, c2) { 
        const cardDiv = await game.promptWith(c1, c2, $("#elements .card:not(.question)"));
        return $(cardDiv).data("element");
    },
    async promptNewElement(c1, c2) { 
        const card = $(await game.promptWith(c1, c2, $("#emoji .card")));
        this.discoverElement(card.data("element"), card.data("emoji"));
        return card.data("element");
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
    discoverElement(name, emoji) {
        console.log("discovered", name, emoji);
        gameData.emoji[name] = emoji;
        const d = game.makeCard(name, emoji, true);
        $("#elements .question").first().replaceWith(d);
    },
    makeCard(e, emoji, draggable) {
        emoji = emoji || gameData.emoji[e];
        const d = $(`<div class="card" data-element="${e}" data-emoji="${emoji}">${emoji}<span class="name">${e}</span></div>`);
        if (draggable) new Card(d[0], true);
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
    for (var i=0; i<20; i++) game.addMysteryElement();

    game.discoverElement("fire", "🔥");
    game.discoverElement("water", "🌊");
    game.discoverElement("earth", "⛰️");
    game.discoverElement("air", "💨");
    game.addEmptyEquation();

    for (e of emoji) {
        const d = game.makeCard(e, e);
        d.data("name", e);
        d.data("emoji", e);
        $("#emoji").append(d);
    }
});
