const emoji = [ 
    ["🌋", "volcano"],
    ["🏔️", "mountain snow"],
    ["🏜️", "desert"],
    ["🏝️", "desert island"],
    ["🏞️", "national park"],
    ["🗺️", "world map"],
    ["🌐", "globe with meridians"],
    ["🗾", "japan"],
    ["🗻", "mount fuji"],
    ["🌍", "earth africa"],
    ["🌎", "earth americas"],
    ["🌏", "earth asia"],
    ["🏖️", "beach umbrella"],
    ["🌄", "sunrise over mountains"],
    ["🌅", "sunrise"],
    ["⭐", "star"],
    ["🌟", "star2"],
    ["🌠", "stars"],
    ["🌌", "milky way"],
    ["🌝", "full moon with face"],
    ["☀️", "sunny"],
    ["🌞", "sun with face"],
    ["🪐", "ringed planet"],
    ["☁️", "cloud"],
    ["⛅", "partly sunny"],
    ["⛈️", "cloud with lightning and rain"],
    ["🌤️", "sun behind small cloud"],
    ["🌥️", "sun behind large cloud"],
    ["🌦️", "sun behind rain cloud"],
    ["🌧️", "cloud with rain"],
    ["🌨️", "cloud with snow"],
    ["🌩️", "cloud with lightning"],
    ["🌪️", "tornado"],
    ["🌫️", "fog"],
    ["🌬️", "wind face"],
    ["🌀", "cyclone"],
    ["🌈", "rainbow"],
    ["🪨", "rock"],
    ["⚡", "zap"],
    ["🌡️", "thermometer"],
    ["🧲", "magnet"],
    ["⌛", "hourglass"],
    ["⏳", "hourglass flowing sand"],
    ["🧊", "ice cube"],
    ["❄️", "snowflake"],
    ["🧬", "dna"],
    ["🦠", "microbe"],
    ["🩸", "drop of blood"],
    ["♀️", "female sign"],
    ["♂️", "male sign"],
    ["☄️", "comet"],
    ["💧", "droplet"],
    ["🌊", "ocean"],
    ["✨", "sparkles"],
    ["🎲", "game die"],
    ["🎨", "art"],
    ["⬆️", "arrow up"],
    ["➡️", "arrow right"],
    ["⬇️", "arrow down"],
    ["⬅️", "arrow left"],
    ["🔇", "mute"],
    ["🔈", "speaker"],
    ["🔉", "sound"],
    ["🔊", "loud sound"],
    ["🎵", "musical note"],
    ["🎶", "notes"],
    ["🧮", "abacus"],
    ["✂️", "scissors"],
    ["🗑️", "wastebasket"],
    ["🛡️", "shield"],
    ["🔬", "microscope"],
    ["🔭", "telescope"],
    ["💊", "pill"],
    ["🧼", "soap"],
    ["🧯", "fire extinguisher"],
    ["⚰️", "coffin"],
    ["☢️", "radioactive"],
    ["☣️", "biohazard"],
    ["🧱", "bricks"],
    ["🏗️", "building construction"],
    ["🌱", "seedling"],
    ["🌿", "herb"],
    ["🪵", "wood"],
    ["🌲", "evergreen tree"],
    ["🌳", "deciduous tree"],
    ["🌴", "palm tree"],
    ["🌵", "cactus"],
    ["🌾", "ear of rice"],
    ["☘️", "shamrock"],
    ["🍀", "four leaf clover"],
    ["🍁", "maple leaf"],
    ["🍂", "fallen leaf"],
    ["🍃", "leaves"],
    ["🪱", "worm"],
    ["🦑", "squid"],
    ["🐙", "octopus"],
    ["🦐", "shrimp"],
    ["🦞", "lobster"],
    ["🦀", "crab"],
    ["🐜", "ant"],
    ["🐝", "bee"],
    ["🪲", "beetle"],
    ["🐞", "lady beetle"],
    ["🦗", "cricket"],
    ["🪳", "cockroach"],
    ["🕷️", "spider"],
    ["🕸️", "spider web"],
    ["🦂", "scorpion"],
    ["🐛", "bug"],
    ["🦋", "butterfly"],
    ["🦟", "mosquito"],
    ["🪰", "fly"],
    ["🐟", "fish"],
    ["🐠", "tropical fish"],
    ["🦈", "shark"],
    ["🐡", "blowfish"],
    ["🐚", "shell"],
    ["🐌", "snail"],
    ["🐾", "feet"],
    ["🦇", "bat"],
    ["👣", "footprints"],
    ["🐭", "mouse"],
    ["🐁", "mouse2"],
    ["🐀", "rat"],
    ["🐹", "hamster"],
    ["🐰", "rabbit"],
    ["🐇", "rabbit2"],
    ["🐿️", "chipmunk"],
    ["🦫", "beaver"],
    ["🦔", "hedgehog"],
    ["🐩", "poodle"],
    ["🐺", "wolf"],
    ["🦊", "fox face"],
    ["🦝", "raccoon"],
    ["🐪", "dromedary camel"],
    ["🐫", "camel"],
    ["🦙", "llama"],
    ["🦒", "giraffe"],
    ["🐘", "elephant"],
    ["🦣", "mammoth"],
    ["🦏", "rhinoceros"],
    ["🦛", "hippopotamus"],
    ["🐱", "cat"],
    ["🐈", "cat2"],
    ["🦁", "lion"],
    ["🐯", "tiger"],
    ["🐅", "tiger2"],
    ["🐆", "leopard"],
    ["🦓", "zebra"],
    ["🦌", "deer"],
    ["🦬", "bison"],
    ["🐂", "ox"],
    ["🐃", "water buffalo"],
    ["🐵", "monkey face"],
    ["🐒", "monkey"],
    ["🦍", "gorilla"],
    ["🦧", "orangutan"],
    ["😶", "no mouth"],
    ["😐", "neutral face"],
    ["🤔", "thinking"],
    ["🐴", "horse"],
    ["🐎", "racehorse"],
    ["🦄", "unicorn"],
    ["🐶", "dog"],
    ["🐕", "dog2"],
    ["🦮", "guide dog"],
    ["🐮", "cow"],
    ["🐄", "cow2"],
    ["🐗", "boar"],
    ["🐖", "pig2"],
    ["🐷", "pig"],
    ["🐽", "pig nose"],
    ["🐏", "ram"],
    ["🐑", "sheep"],
    ["🐐", "goat"],
    ["🐻", "bear"],
    ["🐨", "koala"],
    ["🐼", "panda face"],
    ["🦥", "sloth"],
    ["🪶", "feather"],
    ["🦃", "turkey"],
    ["🐔", "chicken"],
    ["🐓", "rooster"],
    ["🐣", "hatching chick"],
    ["🐤", "baby chick"],
    ["🐥", "hatched chick"],
    ["🐦", "bird"],
    ["🐧", "penguin"],
    ["🕊️", "dove"],
    ["🦅", "eagle"],
    ["🦆", "duck"],
    ["🦢", "swan"],
    ["🦉", "owl"],
    ["🦤", "dodo"],
    ["🦩", "flamingo"],
    ["🦚", "peacock"],
    ["🦜", "parrot"],
    ["🐸", "frog"],
    ["🦎", "lizard"],
    ["🐊", "crocodile"],
    ["🐢", "turtle"],
    ["🐍", "snake"],
    ["🦕", "sauropod"],
    ["🦖", "t-rex"],
    ["🐉", "dragon"],
    ["🐲", "dragon face"],
    ["🐳", "whale"],
    ["🐋", "whale2"],
    ["🐬", "dolphin"],
    ["🦭", "seal"],
    ["🧠", "brain"],
    ["🫀", "anatomical heart"],
    ["🫁", "lungs"],
    ["🦷", "tooth"],
    ["🦴", "bone"],
    ["👀", "eyes"],
    ["👁️", "eye"],
    ["👅", "tongue"],
    ["👄", "lips"],
    ["🦵", "leg"],
    ["🦶", "foot"],
    ["👂", "ear"],
    ["🦻", "ear with hearing aid"],
    ["👃", "nose"],
    ["🌸", "cherry blossom"],
    ["💮", "white flower"],
    ["🏵️", "rosette"],
    ["🌺", "hibiscus"],
    ["🌻", "sunflower"],
    ["🌼", "blossom"],
    ["🌷", "tulip"],
    ["🌹", "rose"],
    ["🥀", "wilted flower"],
    ["💐", "bouquet"],
    ["🍄", "mushroom"],
    ["🍇", "grapes"],
    ["🍈", "melon"],
    ["🍉", "watermelon"],
    ["🍊", "mandarin"],
    ["🍋", "lemon"],
    ["🍌", "banana"],
    ["🍍", "pineapple"],
    ["🥭", "mango"],
    ["🍎", "apple"],
    ["🍏", "green apple"],
    ["🍐", "pear"],
    ["🍑", "peach"],
    ["🍒", "cherries"],
    ["🍓", "strawberry"],
    ["🫐", "blueberries"],
    ["🥝", "kiwi fruit"],
    ["🍅", "tomato"],
    ["🫒", "olive"],
    ["🥥", "coconut"],
    ["🥑", "avocado"],
    ["🍆", "eggplant"],
    ["🥔", "potato"],
    ["🥕", "carrot"],
    ["🌽", "corn"],
    ["🌶️", "hot pepper"],
    ["🫑", "bell pepper"],
    ["🥒", "cucumber"],
    ["🥬", "leafy green"],
    ["🥦", "broccoli"],
    ["🧄", "garlic"],
    ["🧅", "onion"],
    ["🥜", "peanuts"],
    ["🌰", "chestnut"],
    ["🪴", "potted plant"],
    ["🍞", "bread"],
    ["🥐", "croissant"],
    ["🥖", "baguette bread"],
    ["🫓", "flatbread"],
    ["🥨", "pretzel"],
    ["🥯", "bagel"],
    ["🥞", "pancakes"],
    ["🧇", "waffle"],
    ["🧀", "cheese"],
    ["🍖", "meat on bone"],
    ["🍗", "poultry leg"],
    ["🥩", "cut of meat"],
    ["🥓", "bacon"],
    ["🍔", "hamburger"],
    ["🍟", "fries"],
    ["🍕", "pizza"],
    ["🌭", "hotdog"],
    ["🥪", "sandwich"],
    ["🌮", "taco"],
    ["🌯", "burrito"],
    ["🫔", "tamale"],
    ["🥙", "stuffed flatbread"],
    ["🧆", "falafel"],
    ["🥚", "egg"],
    ["🍳", "fried egg"],
    ["🥘", "shallow pan of food"],
    ["🍲", "stew"],
    ["🫕", "fondue"],
    ["🥣", "bowl with spoon"],
    ["🥗", "green salad"],
    ["🍿", "popcorn"],
    ["🧈", "butter"],
    ["🧂", "salt"],
    ["🥫", "canned food"],
    ["🍱", "bento"],
    ["🍘", "rice cracker"],
    ["🍙", "rice ball"],
    ["🍚", "rice"],
    ["🍛", "curry"],
    ["🍜", "ramen"],
    ["🍝", "spaghetti"],
    ["🍠", "sweet potato"],
    ["🍢", "oden"],
    ["🍣", "sushi"],
    ["🍤", "fried shrimp"],
    ["🍥", "fish cake"],
    ["🥮", "moon cake"],
    ["🍡", "dango"],
    ["🥟", "dumpling"],
    ["🥠", "fortune cookie"],
    ["🥡", "takeout box"],
    ["🦪", "oyster"],
    ["🍦", "icecream"],
    ["🍧", "shaved ice"],
    ["🍨", "ice cream"],
    ["🍩", "doughnut"],
    ["🍪", "cookie"],
    ["🎂", "birthday"],
    ["🍰", "cake"],
    ["🧁", "cupcake"],
    ["🥧", "pie"],
    ["🍫", "chocolate bar"],
    ["🍬", "candy"],
    ["🍭", "lollipop"],
    ["🍮", "custard"],
    ["🍯", "honey pot"],
    ["🍼", "baby bottle"],
    ["🥛", "milk glass"],
    ["☕", "coffee"],
    ["🫖", "teapot"],
    ["🍵", "tea"],
    ["🍶", "sake"],
    ["🍾", "champagne"],
    ["🍷", "wine glass"],
    ["🍸", "cocktail"],
    ["🍹", "tropical drink"],
    ["🍺", "beer"],
    ["🍻", "beers"],
    ["🥂", "clinking glasses"],
    ["🥃", "tumbler glass"],
    ["🥤", "cup with straw"],
    ["🧋", "bubble tea"],
    ["🧃", "beverage box"],
    ["🧉", "mate"],
    ["🥢", "chopsticks"],
    ["🍽️", "plate with cutlery"],
    ["🍴", "fork and knife"],
    ["🥄", "spoon"],
    ["🔪", "hocho"],
    ["🏺", "amphora"],
    ["🏕️", "camping"],
    ["🛖", "hut"],
    ["🏡", "house with garden"],
    ["🏠", "house"],
    ["🏘️", "houses"],
    ["🏚️", "derelict house"],
    ["🧭", "compass"],
    ["🏛️", "classical building"],
    ["🏟️", "stadium"],
    ["🏢", "office"],
    ["🏣", "post office"],
    ["🏤", "european post office"],
    ["🏥", "hospital"],
    ["🏦", "bank"],
    ["🏨", "hotel"],
    ["🏩", "love hotel"],
    ["🏪", "convenience store"],
    ["🏫", "school"],
    ["🏬", "department store"],
    ["🏭", "factory"],
    ["🏯", "japanese castle"],
    ["🏰", "european castle"],
    ["💒", "wedding"],
    ["🗼", "tokyo tower"],
    ["🗽", "statue of liberty"],
    ["⛪", "church"],
    ["🕌", "mosque"],
    ["🛕", "hindu temple"],
    ["🕍", "synagogue"],
    ["⛩️", "shinto shrine"],
    ["🕋", "kaaba"],
    ["⛲", "fountain"],
    ["⛺", "tent"],
    ["🌁", "foggy"],
    ["🌃", "night with stars"],
    ["🏙️", "cityscape"],
    ["🌆", "city sunset"],
    ["🌇", "city sunrise"],
    ["🌉", "bridge at night"],
    ["♨️", "hotsprings"],
    ["🎠", "carousel horse"],
    ["🎡", "ferris wheel"],
    ["🎢", "roller coaster"],
    ["💈", "barber"],
    ["🎪", "circus tent"],
    ["🚂", "steam locomotive"],
    ["🚃", "railway car"],
    ["🚄", "bullettrain side"],
    ["🚅", "bullettrain front"],
    ["🚆", "train2"],
    ["🚇", "metro"],
    ["🚈", "light rail"],
    ["🚉", "station"],
    ["🚊", "tram"],
    ["🚝", "monorail"],
    ["🚞", "mountain railway"],
    ["🚋", "train"],
    ["🚌", "bus"],
    ["🚍", "oncoming bus"],
    ["🚎", "trolleybus"],
    ["🚐", "minibus"],
    ["🚑", "ambulance"],
    ["🚒", "fire engine"],
    ["🚓", "police car"],
    ["🚔", "oncoming police car"],
    ["🚕", "taxi"],
    ["🚖", "oncoming taxi"],
    ["🚗", "car"],
    ["🚘", "oncoming automobile"],
    ["🚙", "blue car"],
    ["🛻", "pickup truck"],
    ["🚚", "truck"],
    ["🚛", "articulated lorry"],
    ["🚜", "tractor"],
    ["🏎️", "racing car"],
    ["🏍️", "motorcycle"],
    ["🛵", "motor scooter"],
    ["🦽", "manual wheelchair"],
    ["🦼", "motorized wheelchair"],
    ["🛺", "auto rickshaw"],
    ["🚲", "bike"],
    ["🛴", "kick scooter"],
    ["🛹", "skateboard"],
    ["🛼", "roller skate"],
    ["🚏", "busstop"],
    ["🛣️", "motorway"],
    ["🛤️", "railway track"],
    ["🛢️", "oil drum"],
    ["⛽", "fuelpump"],
    ["🚨", "rotating light"],
    ["🚥", "traffic light"],
    ["🚦", "vertical traffic light"],
    ["🛑", "stop sign"],
    ["🚧", "construction"],
    ["⚓", "anchor"],
    ["⛵", "boat"],
    ["🛶", "canoe"],
    ["🚤", "speedboat"],
    ["🛳️", "passenger ship"],
    ["⛴️", "ferry"],
    ["🛥️", "motor boat"],
    ["🚢", "ship"],
    ["", "airplane"],
    ["🛩️", "small airplane"],
    ["🛫", "flight departure"],
    ["🛬", "flight arrival"],
    ["🪂", "parachute"],
    ["💺", "seat"],
    ["🚁", "helicopter"],
    ["🚟", "suspension railway"],
    ["🚠", "mountain cableway"],
    ["🚡", "aerial tramway"],
    ["🛰️", "artificial satellite"],
    ["🚀", "rocket"],
    ["🛸", "flying saucer"],
    ["🛎️", "bellhop bell"],
    ["🧳", "luggage"],
    ["⌚", "watch"],
    ["⏰", "alarm clock"],
    ["⏱️", "stopwatch"],
    ["⏲️", "timer clock"],
    ["🕰️", "mantelpiece clock"],
    ["🌒", "waxing crescent moon"],
    ["🌔", "moon"],
    ["🌕", "full moon"],
    ["🌖", "waning gibbous moon"],
    ["🌘", "waning crescent moon"],
    ["🌙", "crescent moon"],
    ["🌚", "new moon with face"],
    ["🌛", "first quarter moon with face"],
    ["🌜", "last quarter moon with face"],
    ["🌂", "closed umbrella"],
    ["☂️", "open umbrella"],
    ["☔", "umbrella"],
    ["⛱️", "parasol on ground"],
    ["☃️", "snowman with snow"],
    ["⛄", "snowman"],
    ["🎃", "jack o lantern"],
    ["🎄", "christmas tree"],
    ["🎆", "fireworks"],
    ["🎇", "sparkler"],
    ["🧨", "firecracker"],
    ["🎈", "balloon"],
    ["🎉", "tada"],
    ["🎊", "confetti ball"],
    ["🎋", "tanabata tree"],
    ["🎍", "bamboo"],
    ["🎎", "dolls"],
    ["🎏", "flags"],
    ["🎐", "wind chime"],
    ["🎑", "rice scene"],
    ["🧧", "red envelope"],
    ["🎀", "ribbon"],
    ["🎁", "gift"],
    ["🎗️", "reminder ribbon"],
    ["🎟️", "tickets"],
    ["🎫", "ticket"],
    ["🎖️", "medal military"],
    ["🏆", "trophy"],
    ["🏅", "medal sports"],
    ["🥇", "1st place medal"],
    ["🥈", "2nd place medal"],
    ["🥉", "3rd place medal"],
    ["⚽", "soccer"],
    ["⚾", "baseball"],
    ["🥎", "softball"],
    ["🏀", "basketball"],
    ["🏐", "volleyball"],
    ["🏈", "football"],
    ["🏉", "rugby football"],
    ["🎾", "tennis"],
    ["🥏", "flying disc"],
    ["🎳", "bowling"],
    ["🏏", "cricket game"],
    ["🏑", "field hockey"],
    ["🏒", "ice hockey"],
    ["🥍", "lacrosse"],
    ["🏓", "ping pong"],
    ["🏸", "badminton"],
    ["🥊", "boxing glove"],
    ["🥋", "martial arts uniform"],
    ["🥅", "goal net"],
    ["⛳", "golf"],
    ["⛸️", "ice skate"],
    ["🎣", "fishing pole and fish"],
    ["🤿", "diving mask"],
    ["🎽", "running shirt with sash"],
    ["🎿", "ski"],
    ["🛷", "sled"],
    ["🥌", "curling stone"],
    ["🎯", "dart"],
    ["🪀", "yo yo"],
    ["🪁", "kite"],
    ["🔫", "gun"],
    ["🎱", "8ball"],
    ["🔮", "crystal ball"],
    ["🪄", "magic wand"],
    ["🎮", "video game"],
    ["🕹️", "joystick"],
    ["🎰", "slot machine"],
    ["🧩", "jigsaw"],
    ["🧸", "teddy bear"],
    ["🪅", "pinata"],
    ["🪆", "nesting dolls"],
    ["♟️", "chess pawn"],
    ["🃏", "black joker"],
    ["🀄", "mahjong"],
    ["🎴", "flower playing cards"],
    ["🎭", "performing arts"],
    ["🖼️", "framed picture"],
    ["🧵", "thread"],
    ["🪡", "sewing needle"],
    ["🧶", "yarn"],
    ["🪢", "knot"],
    ["👓", "eyeglasses"],
    ["🕶️", "dark sunglasses"],
    ["🥽", "goggles"],
    ["🥼", "lab coat"],
    ["🦺", "safety vest"],
    ["👔", "necktie"],
    ["👕", "shirt"],
    ["👖", "jeans"],
    ["🧣", "scarf"],
    ["🧤", "gloves"],
    ["🧥", "coat"],
    ["🧦", "socks"],
    ["👗", "dress"],
    ["👘", "kimono"],
    ["🥻", "sari"],
    ["🩱", "one piece swimsuit"],
    ["🩲", "swim brief"],
    ["🩳", "shorts"],
    ["👙", "bikini"],
    ["👚", "womans clothes"],
    ["👛", "purse"],
    ["👜", "handbag"],
    ["👝", "pouch"],
    ["🛍️", "shopping"],
    ["🎒", "school satchel"],
    ["🩴", "thong sandal"],
    ["👞", "mans shoe"],
    ["👟", "athletic shoe"],
    ["🥾", "hiking boot"],
    ["🥿", "flat shoe"],
    ["👠", "high heel"],
    ["👡", "sandal"],
    ["🩰", "ballet shoes"],
    ["👢", "boot"],
    ["👑", "crown"],
    ["👒", "womans hat"],
    ["🎩", "tophat"],
    ["🎓", "mortar board"],
    ["🧢", "billed cap"],
    ["🪖", "military helmet"],
    ["⛑️", "rescue worker helmet"],
    ["📿", "prayer beads"],
    ["💄", "lipstick"],
    ["💍", "ring"],
    ["💎", "gem"],
    ["📢", "loudspeaker"],
    ["📣", "mega"],
    ["📯", "postal horn"],
    ["🔔", "bell"],
    ["🔕", "no bell"],
    ["🎼", "musical score"],
    ["🎙️", "studio microphone"],
    ["🎚️", "level slider"],
    ["🎛️", "control knobs"],
    ["🎤", "microphone"],
    ["🎧", "headphones"],
    ["📻", "radio"],
    ["🎷", "saxophone"],
    ["🪗", "accordion"],
    ["🎸", "guitar"],
    ["🎹", "musical keyboard"],
    ["🎺", "trumpet"],
    ["🎻", "violin"],
    ["🪕", "banjo"],
    ["🥁", "drum"],
    ["🪘", "long drum"],
    ["📱", "iphone"],
    ["📲", "calling"],
    ["☎️", "phone"],
    ["📞", "telephone receiver"],
    ["📟", "pager"],
    ["📠", "fax"],
    ["🔋", "battery"],
    ["🔌", "electric plug"],
    ["💻", "computer"],
    ["🖥️", "desktop computer"],
    ["🖨️", "printer"],
    ["⌨️", "keyboard"],
    ["🖱️", "computer mouse"],
    ["🖲️", "trackball"],
    ["💽", "minidisc"],
    ["💾", "floppy disk"],
    ["💿", "cd"],
    ["📀", "dvd"],
    ["🎥", "movie camera"],
    ["🎞️", "film strip"],
    ["📽️", "film projector"],
    ["🎬", "clapper"],
    ["📺", "tv"],
    ["📷", "camera"],
    ["📸", "camera flash"],
    ["📹", "video camera"],
    ["📼", "vhs"],
    ["🔍", "mag"],
    ["🔎", "mag right"],
    ["🕯️", "candle"],
    ["💡", "bulb"],
    ["🔦", "flashlight"],
    ["🏮", "izakaya lantern"],
    ["🪔", "diya lamp"],
    ["📔", "notebook with decorative cover"],
    ["📕", "closed book"],
    ["📖", "book"],
    ["📗", "green book"],
    ["📘", "blue book"],
    ["📙", "orange book"],
    ["📚", "books"],
    ["📓", "notebook"],
    ["📒", "ledger"],
    ["📃", "page with curl"],
    ["📜", "scroll"],
    ["📄", "page facing up"],
    ["📰", "newspaper"],
    ["🗞️", "newspaper roll"],
    ["📑", "bookmark tabs"],
    ["🔖", "bookmark"],
    ["🏷️", "label"],
    ["💰", "moneybag"],
    ["🪙", "coin"],
    ["💴", "yen"],
    ["💵", "dollar"],
    ["💶", "euro"],
    ["💷", "pound"],
    ["💸", "money with wings"],
    ["💳", "credit card"],
    ["🧾", "receipt"],
    ["💹", "chart"],
    ["✉️", "envelope"],
    ["📧", "e-mail"],
    ["📨", "incoming envelope"],
    ["📩", "envelope with arrow"],
    ["📤", "outbox tray"],
    ["📥", "inbox tray"],
    ["📦", "package"],
    ["📫", "mailbox"],
    ["📪", "mailbox closed"],
    ["📬", "mailbox with mail"],
    ["📭", "mailbox with no mail"],
    ["📮", "postbox"],
    ["🗳️", "ballot box"],
    ["✏️", "pencil2"],
    ["✒️", "black nib"],
    ["🖋️", "fountain pen"],
    ["🖊️", "pen"],
    ["🖌️", "paintbrush"],
    ["🖍️", "crayon"],
    ["📝", "memo"],
    ["💼", "briefcase"],
    ["📁", "file folder"],
    ["📂", "open file folder"],
    ["🗂️", "card index dividers"],
    ["📅", "date"],
    ["📆", "calendar"],
    ["🗒️", "spiral notepad"],
    ["🗓️", "spiral calendar"],
    ["📇", "card index"],
    ["📈", "chart with upwards trend"],
    ["📉", "chart with downwards trend"],
    ["📊", "bar chart"],
    ["📋", "clipboard"],
    ["📌", "pushpin"],
    ["📍", "round pushpin"],
    ["📎", "paperclip"],
    ["🖇️", "paperclips"],
    ["📏", "straight ruler"],
    ["📐", "triangular ruler"],
    ["🗃️", "card file box"],
    ["🗄️", "file cabinet"],
    ["🔒", "lock"],
    ["🔓", "unlock"],
    ["🔏", "lock with ink pen"],
    ["🔐", "closed lock with key"],
    ["🔑", "key"],
    ["🗝️", "old key"],
    ["🔨", "hammer"],
    ["🪓", "axe"],
    ["⛏️", "pick"],
    ["⚒️", "hammer and pick"],
    ["🛠️", "hammer and wrench"],
    ["🗡️", "dagger"],
    ["⚔️", "crossed swords"],
    ["💣", "bomb"],
    ["🪃", "boomerang"],
    ["🏹", "bow and arrow"],
    ["🪚", "carpentry saw"],
    ["🔧", "wrench"],
    ["🪛", "screwdriver"],
    ["🔩", "nut and bolt"],
    ["⚙️", "gear"],
    ["🗜️", "clamp"],
    ["⚖️", "balance scale"],
    ["🦯", "probing cane"],
    ["🔗", "link"],
    ["⛓️", "chains"],
    ["🪝", "hook"],
    ["🧰", "toolbox"],
    ["🪜", "ladder"],
    ["⚗️", "alembic"],
    ["🧪", "test tube"],
    ["🧫", "petri dish"],
    ["📡", "satellite"],
    ["💉", "syringe"],
    ["🩹", "adhesive bandage"],
    ["🩺", "stethoscope"],
    ["🚪", "door"],
    ["🛗", "elevator"],
    ["🪞", "mirror"],
    ["🪟", "window"],
    ["🛏️", "bed"],
    ["🛋️", "couch and lamp"],
    ["🪑", "chair"],
    ["🚽", "toilet"],
    ["🪠", "plunger"],
    ["🚿", "shower"],
    ["🛁", "bathtub"],
    ["🪤", "mouse trap"],
    ["🪒", "razor"],
    ["🧴", "lotion bottle"],
    ["🧷", "safety pin"],
    ["🧹", "broom"],
    ["🧺", "basket"],
    ["🧻", "roll of paper"],
    ["🪣", "bucket"],
    ["🪥", "toothbrush"],
    ["🧽", "sponge"],
    ["🛒", "shopping cart"],
    ["🚬", "smoking"],
    ["🪦", "headstone"],
    ["⚱️", "funeral urn"],
    ["🧿", "nazar amulet"],
    ["🗿", "moyai"],
    ["🪧", "placard"],
    ["🏧", "atm"],
    ["🚮", "put litter in its place"],
    ["🚰", "potable water"],
    ["♿", "wheelchair"],
    ["🚹", "mens"],
    ["🚺", "womens"],
    ["🚻", "restroom"],
    ["🚼", "baby symbol"],
    ["🚾", "wc"],
    ["🛂", "passport control"],
    ["🛃", "customs"],
    ["🛄", "baggage claim"],
    ["🛅", "left luggage"],
    ["🚸", "children crossing"],
    ["⛔", "no entry"],
    ["🚫", "no entry sign"],
    ["🚳", "no bicycles"],
    ["🚭", "no smoking"],
    ["🚯", "do not litter"],
    ["🚱", "non-potable water"],
    ["🚷", "no pedestrians"],
    ["📵", "no mobile phones"],
    ["🔞", "underage"],
    ["↩️", "leftwards arrow with hook"],
    ["↪️", "arrow right hook"],
    ["🔃", "arrows clockwise"],
    ["🔄", "arrows counterclockwise"],
    ["🔙", "back"],
    ["🔚", "end"],
    ["🔛", "on"],
    ["🔜", "soon"],
    ["🔝", "top"],
    ["⚛️", "atom symbol"],
    ["☮️", "peace symbol"],
    ["☯️", "yin yang"],
    ["🛐", "place of worship"],
    ["☸️", "wheel of dharma"],
    ["🕉️", "om"],
    ["✡️", "star of david"],
    ["✝️", "latin cross"],
    ["☦️", "orthodox cross"],
    ["☪️", "star and crescent"],
    ["🕎", "menorah"],
    ["🔯", "six pointed star"],
    ["♈", "aries"],
    ["♉", "taurus"],
    ["♊", "gemini"],
    ["♋", "cancer"],
    ["♌", "leo"],
    ["♍", "virgo"],
    ["♎", "libra"],
    ["♏", "scorpius"],
    ["♐", "sagittarius"],
    ["♑", "capricorn"],
    ["♒", "aquarius"],
    ["♓", "pisces"],
    ["⛎", "ophiuchus"],
    ["🔀", "twisted rightwards arrows"],
    ["🔁", "repeat"],
    ["🔂", "repeat one"],
    ["⏩", "fast forward"],
    ["⏭️", "next track button"],
    ["⏯️", "play or pause button"],
    ["⏪", "rewind"],
    ["⏮️", "previous track button"],
    ["🔼", "arrow up small"],
    ["⏫", "arrow double up"],
    ["🔽", "arrow down small"],
    ["⏬", "arrow double down"],
    ["⏸️", "pause button"],
    ["⏹️", "stop button"],
    ["⏺️", "record button"],
    ["🎦", "cinema"],
    ["🔅", "low brightness"],
    ["🔆", "high brightness"],
    ["📶", "signal strength"],
    ["📳", "vibration mode"],
    ["📴", "mobile phone off"],
    ["⚧️", "transgender symbol"],
    ["✖️", "heavy multiplication x"],
    ["➕", "heavy plus sign"],
    ["➖", "heavy minus sign"],
    ["➗", "heavy division sign"],
    ["♾️", "infinity"],
    ["❓", "question"],
    ["❔", "grey question"],
    ["❕", "grey exclamation"],
    ["❗", "exclamation"],
    ["〰️", "wavy dash"],
    ["💱", "currency exchange"],
    ["💲", "heavy dollar sign"],
    ["⚕️", "medical symbol"],
    ["♻️", "recycle"],
    ["⚜️", "fleur de lis"],
    ["🔱", "trident"],
    ["📛", "name badge"],
    ["🔰", "beginner"],
    ["⭕", "o"],
    ["✅", "white check mark"],
    ["☑️", "ballot box with check"],
    ["✔️", "heavy check mark"],
    ["❌", "x"],
    ["❎", "negative squared cross mark"],
    ["➰", "curly loop"],
    ["➿", "loop"],
    ["〽️", "part alternation mark"],
    ["✳️", "eight spoked asterisk"],
    ["✴️", "eight pointed black star"],
    ["❇️", "sparkle"],
    ["©️", "copyright"],
    ["®️", "registered"],
    ["™️", "tm"],
    ["🔟", "keycap ten"],
    ["🔤", "abc"],
    ["🆒", "cool"],
    ["🆓", "free"],
    ["ℹ️", "information source"],
    ["🆔", "id"],
    ["🆕", "new"],
    ["🆖", "ng"],
    ["🆗", "ok"],
    ["🆘", "sos"],
    ["🆙", "up"],
    ["🆚", "vs"],
    ["🈁", "koko"],
    ["🈂️", "sa"],
    ["🉐", "ideograph advantage"],
    ["🉑", "accept"],
    ["㊗️", "congratulations"],
    ["㊙️", "secret"],
    ["🔴", "red circle"],
    ["🟠", "orange circle"],
    ["🟡", "yellow circle"],
    ["🟢", "green circle"],
    ["🔵", "large blue circle"],
    ["🟣", "purple circle"],
    ["🟤", "brown circle"],
    ["⚫", "black circle"],
    ["⚪", "white circle"],
    ["🟥", "red square"],
    ["🟧", "orange square"],
    ["🟨", "yellow square"],
    ["🟩", "green square"],
    ["🟦", "blue square"],
    ["🟪", "purple square"],
    ["🟫", "brown square"],
    ["⬛", "black large square"],
    ["⬜", "white large square"],
    ["◾", "black medium small square"],
    ["◽", "white medium small square"],
    ["🔶", "large orange diamond"],
    ["🔷", "large blue diamond"],
    ["🔸", "small orange diamond"],
    ["🔹", "small blue diamond"],
    ["🔺", "small red triangle"],
    ["🔻", "small red triangle down"],
    ["💠", "diamond shape with a dot inside"],
    ["🔘", "radio button"],
    ["🔳", "white square button"],
    ["🔲", "black square button"],
    ["🏁", "checkered flag"],
    ["🚩", "triangular flag on post"],
    ["🎌", "crossed flags"],
    ["🏴", "black flag"],
    ["🏳️", "white flag"],
    ["😀", "grinning"],
    ["😃", "smiley"],
    ["😄", "smile"],
    ["😁", "grin"],
    ["😆", "laughing"],
    ["😅", "sweat smile"],
    ["🤣", "rofl"],
    ["😂", "joy"],
    ["🙂", "slightly smiling face"],
    ["🙃", "upside down face"],
    ["😉", "wink"],
    ["😊", "blush"],
    ["😇", "innocent"],
    ["🥰", "smiling face with three hearts"],
    ["😍", "heart eyes"],
    ["🤩", "star struck"],
    ["😘", "kissing heart"],
    ["😗", "kissing"],
    ["😚", "kissing closed eyes"],
    ["😙", "kissing smiling eyes"],
    ["🥲", "smiling face with tear"],
    ["😋", "yum"],
    ["😛", "stuck out tongue"],
    ["😜", "stuck out tongue winking eye"],
    ["🤪", "zany face"],
    ["😝", "stuck out tongue closed eyes"],
    ["🤑", "money mouth face"],
    ["🤗", "hugs"],
    ["🤭", "hand over mouth"],
    ["🤫", "shushing face"],
    ["🤐", "zipper mouth face"],
    ["🤨", "raised eyebrow"],
    ["😑", "expressionless"],
    ["😏", "smirk"],
    ["😒", "unamused"],
    ["🙄", "roll eyes"],
    ["😬", "grimacing"],
    ["🤥", "lying face"],
    ["😌", "relieved"],
    ["😔", "pensive"],
    ["😪", "sleepy"],
    ["🤤", "drooling face"],
    ["😴", "sleeping"],
    ["😷", "mask"],
    ["🤒", "face with thermometer"],
    ["🤕", "face with head bandage"],
    ["🤢", "nauseated face"],
    ["🤮", "vomiting face"],
    ["🤧", "sneezing face"],
    ["🥵", "hot face"],
    ["🥶", "cold face"],
    ["🥴", "woozy face"],
    ["😵", "dizzy face"],
    ["🤯", "exploding head"],
    ["🤠", "cowboy hat face"],
    ["🥳", "partying face"],
    ["🥸", "disguised face"],
    ["😎", "sunglasses"],
    ["🤓", "nerd face"],
    ["🧐", "monocle face"],
    ["😕", "confused"],
    ["😟", "worried"],
    ["🙁", "slightly frowning face"],
    ["😮", "open mouth"],
    ["😯", "hushed"],
    ["😲", "astonished"],
    ["😳", "flushed"],
    ["🥺", "pleading face"],
    ["😦", "frowning"],
    ["😧", "anguished"],
    ["😨", "fearful"],
    ["😰", "cold sweat"],
    ["😥", "disappointed relieved"],
    ["😢", "cry"],
    ["😭", "sob"],
    ["😱", "scream"],
    ["😖", "confounded"],
    ["😣", "persevere"],
    ["😞", "disappointed"],
    ["😓", "sweat"],
    ["😩", "weary"],
    ["😫", "tired face"],
    ["🥱", "yawning face"],
    ["😤", "triumph"],
    ["😡", "pout"],
    ["😠", "angry"],
    ["🤬", "cursing face"],
    ["😈", "smiling imp"],
    ["👿", "imp"],
    ["💀", "skull"],
    ["☠️", "skull and crossbones"],
    ["💩", "hankey"],
    ["🤡", "clown face"],
    ["👹", "japanese ogre"],
    ["👺", "japanese goblin"],
    ["👻", "ghost"],
    ["👽", "alien"],
    ["👾", "space invader"],
    ["🤖", "robot"],
    ["😺", "smiley cat"],
    ["😸", "smile cat"],
    ["😹", "joy cat"],
    ["😻", "heart eyes cat"],
    ["😼", "smirk cat"],
    ["😽", "kissing cat"],
    ["🙀", "scream cat"],
    ["😿", "crying cat face"],
    ["😾", "pouting cat"],
    ["🙈", "see no evil"],
    ["🙉", "hear no evil"],
    ["🙊", "speak no evil"],
    ["💌", "love letter"],
    ["💘", "cupid"],
    ["💝", "gift heart"],
    ["💖", "sparkling heart"],
    ["💗", "heartpulse"],
    ["💓", "heartbeat"],
    ["💞", "revolving hearts"],
    ["💕", "two hearts"],
    ["💟", "heart decoration"],
    ["❣️", "heavy heart exclamation"],
    ["💔", "broken heart"],
    ["❤️", "heart"],
    ["🧡", "orange heart"],
    ["💛", "yellow heart"],
    ["💚", "green heart"],
    ["💙", "blue heart"],
    ["💜", "purple heart"],
    ["🤎", "brown heart"],
    ["🖤", "black heart"],
    ["🤍", "white heart"],
    ["💋", "kiss"],
    ["💯", "100"],
    ["💢", "anger"],
    ["💥", "boom"],
    ["💫", "dizzy"],
    ["💦", "sweat drops"],
    ["💨", "dash"],
    ["🕳️", "hole"],
    ["💬", "speech balloon"],
    ["🗨️", "left speech bubble"],
    ["🗯️", "right anger bubble"],
    ["💭", "thought balloon"],
    ["💤", "zzz"],
    ["👋", "wave"],
    ["🤚", "raised back of hand"],
    ["🖐️", "raised hand with fingers splayed"],
    ["✋", "hand"],
    ["🖖", "vulcan salute"],
    ["👌", "ok hand"],
    ["🤌", "pinched fingers"],
    ["🤏", "pinching hand"],
    ["✌️", "v"],
    ["🤞", "crossed fingers"],
    ["🤟", "love you gesture"],
    ["🤘", "metal"],
    ["🤙", "call me hand"],
    ["👈", "point left"],
    ["👉", "point right"],
    ["👆", "point up 2"],
    ["🖕", "fu"],
    ["👇", "point down"],
    ["☝️", "point up"],
    ["👍", "+1"],
    ["👎", "-1"],
    ["✊", "fist"],
    ["👊", "facepunch"],
    ["🤛", "fist left"],
    ["🤜", "fist right"],
    ["👏", "clap"],
    ["🙌", "raised hands"],
    ["👐", "open hands"],
    ["🤲", "palms up together"],
    ["🤝", "handshake"],
    ["🙏", "pray"],
    ["✍️", "writing hand"],
    ["💅", "nail care"],
    ["🤳", "selfie"],
    ["💪", "muscle"],
    ["🦾", "mechanical arm"],
    ["🦿", "mechanical leg"],
    ["👶", "baby"],
    ["🧒", "child"],
    ["👦", "boy"],
    ["👧", "girl"],
    ["🧑", "adult"],
    ["👱", "blond haired person"],
    ["👨", "man"],
    ["🧔", "bearded person"],
    ["👩", "woman"],
    ["🧓", "older adult"],
    ["👴", "older man"],
    ["👵", "older woman"],
    ["🙍", "frowning person"],
    ["🙎", "pouting face"],
    ["🙅", "no good"],
    ["🙆", "ok person"],
    ["💁", "information desk person"],
    ["🙋", "raising hand"],
    ["🧏", "deaf person"],
    ["🙇", "bow"],
    ["🤦", "facepalm"],
    ["🤷", "shrug"],
    ["👮", "cop"],
    ["🕵️", "detective"],
    ["💂", "guard"],
    ["🥷", "ninja"],
    ["👷", "construction worker"],
    ["🤴", "prince"],
    ["👸", "princess"],
    ["👳", "person with turban"],
    ["👲", "man with gua pi mao"],
    ["🧕", "woman with headscarf"],
    ["🤵", "person in tuxedo"],
    ["👰", "person with veil"],
    ["🤰", "pregnant woman"],
    ["🤱", "breast feeding"],
    ["👼", "angel"],
    ["🎅", "santa"],
    ["🤶", "mrs claus"],
    ["🦸", "superhero"],
    ["🦹", "supervillain"],
    ["🧙", "mage"],
    ["🧚", "fairy"],
    ["🧛", "vampire"],
    ["🧜", "merperson"],
    ["🧝", "elf"],
    ["🧞", "genie"],
    ["🧟", "zombie"],
    ["💆", "massage"],
    ["💇", "haircut"],
    ["🚶", "walking"],
    ["🏃", "runner"],
    ["💃", "dancer"],
    ["🕺", "man dancing"],
    ["🕴️", "business suit levitating"],
    ["👯", "dancers"],
    ["🏄", "surfer"],
    ["🚣", "rowboat"],
    ["🏊", "swimmer"],
    ["⛹️", "bouncing ball person"],
    ["🏋️", "weight lifting"],
    ["🚴", "bicyclist"],
    ["🚵", "mountain bicyclist"],
    ["🤸", "cartwheeling"],
    ["🤼", "wrestling"],
    ["🤽", "water polo"],
    ["🤾", "handball person"],
    ["🤹", "juggling person"],
    ["🧘", "lotus position"],
    ["🛀", "bath"],
    ["🛌", "sleeping bed"],
    ["👭", "two women holding hands"],
    ["👫", "couple"],
    ["👬", "two men holding hands"],
    ["💏", "couplekiss"],
    ["💑", "couple with heart"],
    ["🗣️", "speaking head"],
    ["👤", "bust in silhouette"],
    ["👥", "busts in silhouette"],
    ["🫂", "people hugging"],
    ["👪", "family"],
];
