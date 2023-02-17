/**

EMBERS
Team Levi 2023


@SUBSCRIBE
Subscribe to Team Levi here!
https://www.khanacademy.org/computer-programming/team-levi-coc-2023/5151245111443456

**/

var p, fireLeft;

var keys = {};
var mouse = {
    x: mouseX,
    y: mouseY,
};
var cam = {
    x: 0,
    y: 60,
};
var imgs = {
    block: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "113331313333",
            "001111100010",
            "100003130010",
            "100031300100",
            "310310011333",
            "310310133311",
            "031311311100",
            "003113130000",
            "031013013000",
            "031001301300",
            "310001301300",
            "310000100130",
        ];
        var colors = {
            '0': color(168, 91, 91),
            '1': color(0),
            '2': color(122, 122, 122),
            '3': color(122, 43, 43)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                rect(X*sz, Y*sz, sz, sz);
            }
        }
        
        return get(0, 0, 60, 60);
    }, // Block
    sign: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "",
            "",
            "",
            "",
            "22222222222",
            "22122112212",
            "31131133122",
            "33333333333",
            "    333",
            "    333",
            "    333",
            "    333",
        ];
        var colors = {
            '1': color(0),
            '2': color(171, 108, 0),
            '3': color(148, 72, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 60, 60);
    }, // Sign
    spike: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "",
            "",
            "",
            "     12",
            "     12",
            "    1122",
            "   111222",
            "   111222",
            "  11112222",
            " 1111122222",
            " 1111122222",
            "111111222222",
        ];
        var colors = {
            '1': color(150),
            '2': color(100),
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        
        return get(0, 0, 60, 60);
    }, // Spike (up)
    downspike: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "111111222222",
            " 1111122222",
            " 1111122222",
            "  11112222",
            "   111222",
            "   111222",
            "    1122",
            "     12",
            "     12",
            "",
            "",
            "",
        ];
        var colors = {
            '1': color(150),
            '2': color(100),
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        
        return get(0, 0, 60, 60);
    }, // Spike (down)
    ammo: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "",
            "",
            " 1111111",
            "111131111",
            "111333112",
            "111333222",
            "113334422",
            "113444422",
            "122444222",
            " 2222222",
            "",
            " ",
        ];
        var colors = {
            '1': color(255),
            '2': color(209, 209, 209),
            '3': color(0, 128, 247),
            '4': color(0, 104, 189)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 60, 60);
    }, // Ammo
    fire: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "   1",
            "    1 1",
            "   12",
            "   1211",
            "1 11331",
            "  1 3311",
            " 1133331",
            "11344431",
            "13344431",
            "13544451",
            "11544551",
            " 111111",
        ];
        var colors = {
            '1': color(255, 0, 0),
            '2': color(255, 115, 0),
            '3': color(255, 157, 0),
            '4': color(255, 187, 0),
            '5': color(251, 255, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 60, 60);
    }, // Fire
    ladder: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "1          1",
            "111111111111",
            "111111111111",
            "1          1",
            "1          1",
            "1          1",
            "1          1",
            "111111111111",
            "111111111111",
            "1          1",
            "1          1",
            "1          1",
        ];
        var colors = {
            '-': color(0),
            '1': color(176, 82, 0),
            '2': color(189, 130, 82),
            '3': color(176, 106, 0),
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                if (bitmaps[Y][X]!==' '){
                    fill(colors[bitmaps[Y][X]]);
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 60, 60);
    
    }, // Ladder
    playerright1: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            " ----",
            "--433",
            "-4333",
            "-4444",
            " ----",
            "-2211",
            "-2111---",
            "-211-343-",
            "-211-343-",
            " - - ---",
            " -  -",
            "-   -",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Right 1
    playerleft1: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "    ---- ",
            "    334--",
            "    3334-",
            "    4444-",
            "    ----",
            " ---1122-",
            "-343-112-",
            "-343-112-",
            " --- 112-",
            "    -  -",
            "    -  -",
            "    -   -",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Left 1
    playerright2: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            " ----",
            "--433",
            "-4333",
            "-4444",
            " ----",
            "-2211",
            "-2111---",
            "-211-343-",
            "-211-343-",
            " -- - --",
            "-    -",
            "     -",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Right 2
    playerleft2: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "    ---- ",
            "    334--",
            "    3334-",
            "    4444-",
            "    ----",
            " ---1122-",
            "-343-112-",
            "-343-112-",
            " --- 112-",
            "    - --",
            "   -    -",
            "   - ",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Left 2
    playerright3: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            " ----",
            "--433",
            "-4333",
            "-4444",
            " ----",
            "-2211",
            "-2111---",
            "-211-343-",
            "-211-343-",
            "  - ----",
            "--  -",
            "   -",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Right 3
    playerleft3: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "    ---- ",
            "    334--",
            "    3334-",
            "    4444-",
            "    ----",
            " ---1122-",
            "-343-112-",
            "-343-112-",
            " --- 112-",
            "    - -",
            "    -  --",
            "     -   ",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Stance Left 3
    playerright0: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            " ----",
            "--433",
            "-4333",
            "-4444",
            " ----",
            "-2211",
            "-2111---",
            "-211-343-",
            "-211-343-",
            "  - ----",
            "--  -",
            "   -",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Jump Right
    playerleft0: function(){
        background(0, 0, 0, 0);
        
        var bitmaps = [
            "    ---- ",
            "    334--",
            "    3334-",
            "    4444-",
            "    ----",
            " ---1122-",
            "-343-112-",
            "-343-112-",
            " --- 112-",
            "    - --",
            "    -   -",
            "     -   ",
        ];
        var colors = {
            '-': color(0),
            '1': color(186, 0, 0),
            '2': color(186, 69, 69),
            '3': color(255, 217, 0),
            '4': color(230, 196, 0)
        };
        var sz = 5;
        
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                fill(colors[bitmaps[Y][X]]);
                if (bitmaps[Y][X]!==' '){
                    rect(X*sz, Y*sz, sz, sz);
                }
            }
        }
        
        return get(0, 0, 45, 60);
    }, // Player Jump Left
};

var scene = 'load';

var curLoad = 0;
var lvl = 0;
var level = lvl+1;
var blockSize = 60;

var blocks = [];
var enemies = [];
var portals = [];
var signs = [];
var water = [];
var fires = [];
var levels = [
    /*
    {
        map: [
            "                    ",
            "",
            "",
            "",
            "@ ?",
            "####################",
            "####################",
            "####################",
            "####################",
            "####################",
        ],
        name: "New Level",
        messages: ["<message here>"],
    },
    */
    {
        map: [
            "                   ",
            "                  #",
            "                 ##",
            "                ###",
            "               ####",
            "              #####",
            "             ######",
            "            #######",
            "@ ?        ########",
            "###################",
            "###################",
            "###################",
            "###################",
            "###################",
        ],
        name: "Welcome To Embers",
        messages: ['Welcome to the\nWorld of Embers!'],
    },
    {
        map: [
            "                   ",
            "",
            "",
            "",
            "",
            "",
            "           ",
            "        #####",
            "@ ?    #######^^  ",
            "###################",
            "###################",
            "###################",
            "###################",
            "###################",
        ],
        name: "Sharp Edges",
        messages: ['Avoid spikes!'],
    },
    {
        map: [
            "                    ",
            "",
            "",
            "",
            "",
            "",
            "@  ?    **** ? %",
            "####################",
            "####################",
            "####################",
            "####################",
            "####################",
        ],
        name: "Flames",
        messages: ['You must put out all\nfires before going to\nnext level', 'use this to refill water'],
    },
    {
        map: [
            "                        ",
            "",
            "",
            "",
            "@  ",
            "##            ##########",
            "##            ##########",
            "##            ##########",
            "## ?          ##########",
            "############# ##########",
            "            # ##########",
            "            # ##########",
            "                         ",
            "#########################",
        ],
        name: "[R] is for restart",
        messages: ['[R] to restart'],
    },
    {
        map: [
            "                              ",
            "",
            "",
            "",
            "@ ?    ^^  ^^  ********** % **",
            "##############################",
            "##############################",
            "##############################",
            "##############################",
            "##############################",
        ],
        name: "Unleashed",
        messages: ['end of tutorial'],
    },
    {
        map: [
            "                                   ",
            "",
            "           #####",
            "     ####            ##",
            "@ ?                   ",
            "###                         #######",
        ],
        name: "Parkour",
        messages: ['parkour skills activate\noh yeah you can air jump\njump in air lol'],
    },
    {
        map: [
            "######################",
            "$                    ",
            "$                    ",
            "$#####################",
            "$                    #",
            "$          ^^^^^^^^^^#",
            "$#####################",
            "$                    #",
            "$     ? % ***********#",
            "$#####################",
            "$",
            "$",
            "$",
            
            "@ ?",
            "######################",
            "######################",
            "######################",
            "######################",
            "######################",
        ],
        name: "Climbs",
        messages: ['put these out first =]', 'i think you know how to use ladders'],
    },
    {
        map: [
            "                                     $####       ",
            "                                     $       ####",
            "                $####       ****     $",
            "      ####               #######    ",
            "@ ?",
            "###",
        ],
        name: "Parkour 2.0",
        messages: ["real parkour now"],
    },
    {
        map: [
            "#######################                    ",
            "vvvvvvvvvvvvvvvvvvvvvvv",
            "             $    ",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "             $",
            "         @ ?",
            "         ##########",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "                     ^^^^^^^^^^^",
            "#######              ###########",
            "########",
            "#########",
            "##########",
            "###########",
            "",
            "",
            "",
            "",
            "",
            "                     ^^^^^^^^^^^^^^^^^^^^^",
            " #########################################",
            "",
            "",
            "",
            "",
            "",
            "     ?",
            "###########################################",
        ],
        name: "Three Split",
        messages: ["choose one direction.\nor go up.", '>>>>>>>>>>>'],
    },
    {
        map: [
            "                                                  ",
            "                    $#########",
            "                    $               *****",
            "         ######                    ######",
            "@ ?                                         ^^",
            "######                                      ######",
            "",
            "",
            "",
            "",
            "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        ],
        name: "Don't Fall",
        messages: ["Don't Fall."],
    },
    {
        map: [
            "#                                             #",
            "#                                             #",
            "#                                             #",
            "#                                             #",
            "#                                             #",
            "#                                             #",
            "#                                             #",
            "#                     @                       #",
            "###############################################"
        ],
        name: "You Win!",
        messages: ["You Win!\nSubscribe for more!"],
    },
];

// User Events
keyPressed = e => {
    keys[e.keyCode] = true;
    keys[e.key.toLowerCase()] = true;
}
keyReleased = e => {
    if (keys.r){
        p.respawn();
    }
    keys[e.keyCode] = false;
    keys[e.key.toLowerCase()] = false;
}
mousePressed = e => mouse[e.button] = true;
mouseReleased = e => delete mouse[e.button]
mouseClicked = () => mouse.click = true;


// Collisions
function collide(obj1, obj2){
    return obj1.x > obj2.x - obj1.w &&
           obj1.x < obj2.x + obj2.w &&
           obj1.y > obj2.y - obj1.h &&
           obj1.y < obj2.y + obj2.h;
}

// Credit to Larry Serflaten (@LarrySerflaten) for the rect > tri collisions
function pointInTriangle(pt, tri) {
  // pt has x, y properties
  // tri has x1, y1, x2, y2, x3, y3

  // the operands  
  var tx1_3 = tri.x1 - tri.x3;
  var tx3_2 = tri.x3 - tri.x2;
  var ty2_3 = tri.y2 - tri.y3;
  var ty3_1 = tri.y3 - tri.y1;
  var px_x3 = pt.x - tri.x3;
  var py_y3 = pt.y - tri.y3;
  var denom = ty2_3 * tx1_3 + tx3_2 * (tri.y1 - tri.y3);

  // the formula
  var a = (ty2_3 * px_x3 + tx3_2 * py_y3) / denom;
  var b = (ty3_1 * px_x3 + tx1_3 * py_y3) / denom;
  var c = 1 - a - b;

  // the tests
  return a > 0 && b > 0 && c > 0 && c < 1 && b < 1 && a < 1;
}

function rectInTri(rct, tri) {
  // rect has x, y, w, h properties
  // tri has x1, y1, x2, y2, x3, y3
  return pointInTriangle({
      x: rct.x,
      y: rct.y
    }, tri) ||
    pointInTriangle({
      x: rct.x + rct.w,
      y: rct.y
    }, tri) ||
    pointInTriangle({
      x: rct.x,
      y: rct.y + rct.h
    }, tri) ||
    pointInTriangle({
      x: rct.x + rct.w,
      y: rct.y + rct.h
    }, tri) ||
    collide({
      x: tri.x1,
      y: tri.y1,
      w: 1,
      h: 1
    }, rct) ||
    collide({
      x: tri.x2,
      y: tri.y2,
      w: 1,
      h: 1
    }, rct) ||
    collide({
      x: tri.x3,
      y: tri.y3,
      w: 1,
      h: 1
    }, rct);
}

// On Canvas
function onCanvas(obj){
    if (obj.x > cam.x - obj.w &&
        obj.x < cam.x + width &&
        obj.y > cam.y - obj.h &&
        obj.y < cam.y + height){
        return true;
    }
}

// Font
function Text(message, x, y, sz, clr){
    var offsetX = 0;
    var offsetY = 0;
    
    for (var i = 0; i < message.length; i ++){
    var bitmaps;
        switch (message[i]){
            case ' ':
                bitmaps = [
                    "  ",
                ];
            break;
            // Uppercase Set {
            case 'A':
                bitmaps = [
                    " ---  ",
                    "-   - ",
                    "-   -",
                    "-----",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'B':
                bitmaps = [
                    "----- ",
                    "-    -",
                    "-    -",
                    "-----",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-----",
                ];
            break;
            case 'C':
                bitmaps = [
                    " ---- ",
                    "-    -",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-    -",
                    " ----",
                ];
            break;
            case 'D':
                bitmaps = [
                    "----- ",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-----",
                ];
            break;
            case 'E':
                bitmaps = [
                    "------",
                    "-",
                    "-   ",
                    "------",
                    "-    ",
                    "-    ",
                    "-    ",
                    "-    ",
                    "------",
                ];
            break;
            case 'F':
                bitmaps = [
                    "------ ",
                    "-",
                    "-   ",
                    "----",
                    "-    ",
                    "-    ",
                    "-    ",
                    "-    ",
                    "-",
                ];
            break;
            case 'G':
                bitmaps = [
                    " ----   ",
                    "-    -",
                    "-   ",
                    "-",
                    "- -----",
                    "-     -",
                    "-     -",
                    "-     -",
                    " -----",
                ];
            break;
            case 'H':
                bitmaps = [
                    "-    -",
                    "-    -",
                    "-    -",
                    "------",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                ];
            break;
            case 'I':
                bitmaps = [
                    " -----",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    " -----",
                ];
            break;
            case 'J':
                bitmaps = [
                    " -----",
                    "     -",
                    "     -",
                    "     -",
                    "     -",
                    "     -",
                    "-    -",
                    "-    -",
                    " ----",
                ];
            break;
            case 'K':
                bitmaps = [
                    "-   - ",
                    "-  -",
                    "---",
                    "-  - ",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'L':
                bitmaps = [
                    "-     ",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-----",
                ];
            break;
            case 'M':
                bitmaps = [
                    "-   - ",
                    "-- --",
                    "- - -",
                    "- - -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'N':
                bitmaps = [
                    "-   -",
                    "--  -",
                    "- - -",
                    "-  --",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'O':
                bitmaps = [
                    " ---- ",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    " ----",
                ];
            break;
            case 'P':
                bitmaps = [
                    "---- ",
                    "-   -",
                    "-   -",
                    "-   -",
                    "----",
                    "-   ",
                    "-   ",
                    "-   ",
                    "-",
                ];
            break;
            case 'Q':
                bitmaps = [
                    " ---- ",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-  - -",
                    "-   - ",
                    " --- -",
                ];
            break;
            case 'R':
                bitmaps = [
                    "---- ",
                    "-   -",
                    "-   -",
                    "-   -",
                    "----",
                    "-  - ",
                    "-   - ",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'S':
                bitmaps = [
                    " -----",
                    "-    ",
                    "-    ",
                    " ----",
                    "     -",
                    "     -",
                    "     -",
                    "-    -",
                    " ----",
                ];
            break;
            case 'T':
                bitmaps = [
                    "-------",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                ];
            break;
            case 'U':
                bitmaps = [
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    " ----",
                ];
            break;
            case 'U':
                bitmaps = [
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    "-    -",
                    " ----",
                ];
            break;
            case 'V':
                bitmaps = [
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    " - -",
                    " - -",
                    " - -",
                    " - -",
                    "  - ",
                ];
            break;
            case 'W':
                bitmaps = [
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "- - -",
                    "-- --",
                    "-   - ",
                ];
            break;
            case 'X':
                bitmaps = [
                    "-   -",
                    " - -",
                    "  -",
                    " - -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'Y':
                bitmaps = [
                    "-   -",
                    " - -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                ];
            break;
            case 'Z':
                bitmaps = [
                    "------",
                    "    -",
                    "   -",
                    "  -",
                    " -",
                    "-",
                    "-",
                    "-",
                    "-----",
                ];
            break;
            // }
            // Lowercase Set {
            case 'a':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    " ----",
                    "     -",
                    " -----",
                    "-    -",
                    " -----",
                ];
            break;
            case 'b':
                bitmaps = [
                    "       ",
                    "-     ",
                    "-",
                    "-",
                    "- ---",
                    "--   -",
                    "-    -",
                    "-    -",
                    "-----",
                ];
            break;
            case 'c':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    " ----",
                    "-    -",
                    "-",
                    "-    -",
                    " ----",
                ];
            break;
            case 'd':
                bitmaps = [
                    "      ",
                    "     -",
                    "     -",
                    "     -",
                    " --- -",
                    "-   --",
                    "-    -",
                    "-    -",
                    " -----",
                ];
            break;
            case 'e':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    " ----",
                    "-    -",
                    "------",
                    "-     ",
                    " -----",
                ];
            break;
            case 'f':
                bitmaps = [
                    "     ",
                    "  ---",
                    " -",
                    " -",
                    "----",
                    " -",
                    " -",
                    " -",
                    " -",
                ];
            break;
            case 'g':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    " -----",
                    "-    -",
                    "-    -",
                    " -----",
                    "     -",
                    "     -",
                    " ----",
                ];
            break;
            case 'h':
                bitmaps = [
                    "     ",
                    "-    ",
                    "-",
                    "-",
                    "- --",
                    "--  -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'i':
                bitmaps = [
                    " ",
                    "",
                    "",
                    "-",
                    " ",
                    "-",
                    "-",
                    "-",
                    "-",
                ];
            break;
            case 'j':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "   -",
                    "    ",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "-  -",
                    " --",
                ];
            break;
            case 'k':
                bitmaps = [
                    
                    "    ",
                    "-   ",
                    "-",
                    "- ",
                    "-  -",
                    "- -",
                    "--",
                    "- -",
                    "-  -",
                ];
            break;
            case 'l':
                bitmaps = [
                    
                    "  ",
                    "- ",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    " -",
                ];
            break;
            case 'm':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    "-- -",
                    "- - -",
                    "- - -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'n':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "----",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                ];
            break;
            case 'o':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    " ---",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ---",
                ];
            break;
            case 'p':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    "- ---",
                    "--   -",
                    "--   -",
                    "-----",
                    "-",
                    "-",
                    "-",
                ];
            break;
            case 'q':
                bitmaps = [
                    "       ",
                    "",
                    "",
                    "",
                    " --- -",
                    "-   --",
                    "-   --",
                    " -----",
                    "     -",
                    "     -",
                    "     -",
                ];
            break;
            case 'r':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "- --",
                    "--  -",
                    "-",
                    "-",
                    "-",
                ];
            break;
            case 's':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    " ----",
                    "-",
                    " ----",
                    "     -",
                    " ----",
                    "",
                ];
            break;
            case 't':
                bitmaps = [
                    "     ",
                    "  -  ",
                    "  -",
                    "  -",
                    "-----",
                    "  -",
                    "  -",
                    "  -",
                    "   -",
                ];
            break;
            case 'u':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "-   -",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ----",
                ];
            break;
            case 'v':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "-   -",
                    "-   -",
                    "-   -",
                    " - -",
                    "  -",
                    "",
                ];
            break;
            case 'w':
                bitmaps = [
                    "      ",
                    "",
                    "",
                    "",
                    "-   -",
                    "-   -",
                    "- - -",
                    "- - -",
                    " ----",
                ];
            break;
            case 'x':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "-   -",
                    " - -",
                    "  -",
                    " - -",
                    "-   -",
                ];
            break;
            case 'y':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ---- ",
                    "    -",
                    "    -",
                    " -  -",
                    "  --",
                ];
            break;
            case 'z':
                bitmaps = [
                    "     ",
                    "",
                    "",
                    "",
                    "-----",
                    "   -",
                    "  -",
                    " -",
                    "-----",
                ];
            break;
            // }
            // Numbers {
            case '0':
                bitmaps = [
                    " ---- ",
                    "-    -",
                    "-    -",
                    "-   --",
                    "-  - -",
                    "- -  -",
                    "--   -",
                    "-    -",
                    " ----",
                ];
            break;
            case '1':
                bitmaps = [
                    "   -  ",
                    "  --",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    " -----",
                ];
            break;
            case '2':
                bitmaps = [
                    " ---- ",
                    "-    -",
                    "     -",
                    "    -",
                    "   -",
                    "  -",
                    " -",
                    "-",
                    "------",
                ];
            break;
            case '3':
                bitmaps = [
                    " --- ",
                    "-   -",
                    "    -",
                    "    -",
                    "  --",
                    "    -",
                    "    -",
                    "-   -",
                    " ---",
                ];
            break;
            case '4':
                bitmaps = [
                    "   --",
                    "  - -",
                    " -  -",
                    " ----",
                    "    -",
                    "    -",
                    "    -",
                    "    -",
                    "    -",
                ];
            break;
            case '5':
                bitmaps = [
                    "----",
                    "-",
                    "---",
                    "   -",
                    "   -",
                    "   -",
                    "   -",
                    "-  -",
                    " --",
                ];
            break;
            case '6':
                bitmaps = [
                    "   --  ",
                    "  -",
                    " -",
                    " -----",
                    " -    -",
                    " -    -",
                    " -    -",
                    " -    -",
                    "  ----",
                ];
            break;
            case '7':
                bitmaps = [
                    " --- ",
                    "-   -",
                    "    -",
                    "    -",
                    "    -",
                    "   -",
                    "  -",
                    "  -",
                    "  -",
                ];
            break;
            case '8':
                bitmaps = [
                    " --- ",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ---",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ---",
                ];
            break;
            case '9':
                bitmaps = [
                    " --- ",
                    "-   -",
                    "-   -",
                    "-   -",
                    " ----",
                    "    -",
                    "    -",
                    "    -",
                    " ---",
                ];
            break;
            // }
            // Punctuations / Operations / Extra stuff idk what they're called {
            case '.':
                bitmaps = [
                    "   ",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "--",
                    "--",
                ];
            break;
            case ',':
                bitmaps = [
                    "   ",
                    "",
                    "",
                    "",
                    "",
                    "",
                    " --",
                    " --",
                    "  -",
                    " -",
                ];
            break;
            case "'":
                bitmaps = [
                    "",
                    "-",
                    "-",
                    "",
                    "",
                ];
            break;
            case '!':
                bitmaps = [
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "  -",
                    "",
                    "  -",
                    "  -",
                ];
            break;
            case '@':
                bitmaps = [
                    "     ",
                    " ---",
                    "-   -",
                    "- - -",
                    "- - -",
                    "- ---",
                    "-  ",
                    " ----",
                ];
            break;
            case '#':
                bitmaps = [
                    "     ",
                    " -  -",
                    " -  -",
                    "------",
                    " -  -",
                    "------",
                    " -  -",
                    " -  -",
                ];
            break;
            case '$':
                bitmaps = [
                    "   --  ",
                    "  ----",
                    " -    -",
                    " -",
                    "  ----",
                    "      -",
                    " -    -",
                    "  ----",
                    "   --",
                ];
            break;
            case '%':
                bitmaps = [
                    "   vv",
                    "     -",
                    " -  -",
                    " -  -",
                    "   -",
                    "  -  -",
                    "  -  -",
                    " -",
                ];
            break;
            case '^':
                bitmaps = [
                    "   - ",
                    "  - -",
                    " -   -",
                    "",
                    "",
                    "",
                    "",
                    "",
                ];
            break;
            case '&':
                bitmaps = [
                    "  -",
                    " - -",
                    "  -",
                    "  -",
                    " -- -",
                    "- --",
                    "-  -",
                    " -- -",
                ];
            break;
            case '*':
                bitmaps = [
                    "  -",
                    " - -",
                    "  -",
                    "   ",
                    "   ",
                    "",
                    "",
                    "",
                ];
            break;
            case '(':
                bitmaps = [
                    "     ",
                    "   --",
                    "  -",
                    " -",
                    " -",
                    " -",
                    " -",
                    "  -",
                    "   --",
                ];
            break;
            case ')':
                bitmaps = [
                    "    ",
                    " -- ",
                    "   -",
                    "    -",
                    "    -",
                    "    -",
                    "    -",
                    "   -",
                    " --",
                ];
            break;
            case '?':
                bitmaps = [
                    "  ---  ",
                    " -   -",
                    "    -",
                    "   -",
                    "   -",
                    "   -",
                    "",
                    "   -",
                    "   -",
                ];
            break;
            case '/':
                bitmaps = [
                    "   ",
                    "    -",
                    "   -",
                    "   -",
                    "  -",
                    " -",
                    " -",
                    "-",
                ];
            break;
            case '\\':
                bitmaps = [
                    "       ",
                    "   -",
                    "    -",
                    "    -",
                    "     -",
                    "      -",
                    "      -",
                    "       -",
                ];
            break;
            case ':':
                bitmaps = [
                    "   ",
                    "  -",
                    "  -",
                    "   ",
                    "   ",
                    "",
                    "  -",
                    "  -",
                ];
            break;
            case ';':
                bitmaps = [
                    "   ",
                    "  -",
                    "  -",
                    "   ",
                    "   ",
                    "",
                    "  -",
                    "  - ",
                    "  -",
                ];
            break;
            case '<':
                bitmaps = [
                    "     ",
                    "  ",
                    "  ",
                    "  --",
                    " -",
                    "-",
                    " -",
                    "  --",
                ];
            break;
            case '>':
                bitmaps = [
                    "     ",
                    "  ",
                    "  ",
                    "--",
                    "  -",
                    "   -",
                    "  -",
                    "--",
                ];
            break;
            case '+':
                bitmaps = [
                    "      ",
                    "  ",
                    "  -",
                    "  -",
                    "-----",
                    "  -",
                    "  -",
                    "  ",
                ];
            break;
            case '-':
                bitmaps = [
                    "      ",
                    "  ",
                    "  ",
                    "  ",
                    "-----",
                    "  ",
                    "  ",
                    "  ",
                ];
            break;
            case '_':
                bitmaps = [
                    "      ",
                    "  ",
                    "  ",
                    "  ",
                    "  ",
                    "  ",
                    "  ",
                    "------",
                ];
            break;
            case '=':
                bitmaps = [
                    "      ",
                    "  ",
                    "  ",
                    "-----",
                    "  ",
                    "-----",
                    "  ",
                    "  ",
                ];
            break;
            case '|':
                bitmaps = [
                    "- ",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                ];
            break;
            case '[':
                bitmaps = [
                    "     ",
                    "---- ",
                    "- ",
                    "- ",
                    "- ",
                    "-",
                    "- ",
                    "- ",
                    "----",
                ];
            break;
            case ']':
                bitmaps = [
                    "      ",
                    "----  ",
                    "   - ",
                    "   - ",
                    "   - ",
                    "   -",
                    "   - ",
                    "   -",
                    "----",
                ];
            break;
            case '{':
                bitmaps = [
                    "  --",
                    " - ",
                    " - ",
                    "- ",
                    " -",
                    " - ",
                    "  --",
                ];
            break;
            case '}':
                bitmaps = [
                    "  -- ",
                    "    - ",
                    "    - ",
                    "     - ",
                    "    -",
                    "    - ",
                    "  --",
                ];
            break;
            // }
            case '\n':
                offsetX = -sz;
                offsetY += 12*sz;
                bitmaps = [""];
            break;
        }
        for (var Y = 0; Y < bitmaps.length; Y ++){
            for (var X = 0; X < bitmaps[Y].length; X ++){
                switch (bitmaps[Y][X]){
                    case ' ': 
                        noFill();
                    break;
                    case '-':
                        fill(clr);
                }
                
                rect(x+offsetX+X*sz, y+offsetY+Y*sz, sz+0.4, sz+0.4);
            }
        }
        
        offsetX += bitmaps[0].length*sz+sz;
    }
}

// Transition
var transition = {
    time: 0,
    fade: 255,
    to: "landing",
    allPossibilities: [],
    arr: [],
    initialized: false,
    reset: function(){
        if(this.fade <= 0){
            this.time = 0;
            this.fade = 255;
            this.initialized = false;
        }
    },
    init () {
        if(!this.initialized){
            for (var i = 0; i < width; i += 20){
                for (var j = 0; j < height; j += 20){
                    this.allPossibilities.push({x: j, y: i, col: 100 + random(0, 255)});
                }
            }
            this.arr.length = 0
            this.allPossibilities.sort(() => random(-1, 1))
            this.initialized = true
        }
    },
    run: function(){
        noStroke();
        
        if(this.allPossibilities.length > 0) {
            for(let i = 12; i--;) this.arr.push(this.allPossibilities[0]), this.allPossibilities.splice(0, 1)
        }
        
        if(!(this.time <= 0 && this.arr.length > 12)) this.arr.forEach(el => {
            fill(el.col, 0, 0, this.fade)
            rect(el.x, el.y, 20, 20)
        })    
            
        this.time ++;
        if (this.time> 100){
            this.fade -= 5;
        }
        if (this.fade < 255){
            scene = this.to;
        }
        
        Text("EMBERS", 85, 207, 11, color(255, 255, 255, this.fade));
    },
};

// Buttons
function button(x, y, txt, to){
    this.x = x;
    this.y = y;
    this.w = 150;
    this.h = 100;
    this.h2 = 0;
    this.col1 = 255;
    this.col2 = 255;
    this.col3 = 255;
    this.txt = txt;
    this.to = to;
    
    this.display = function() {
        pushMatrix();
            noFill();
            strokeWeight(10);
            stroke(255);
            
            rectMode(CENTER);
            rect(this.x, this.y, this.w, this.h);
            
            noStroke();
            fill(255);
            rect(this.x, this.y, this.w, -this.h2);
            
            Text(this.txt, this.x - this.w/3, this.y - this.h/5, 4, color(this.col1, this.col2, this.col3));
            rectMode(CORNER)
        popMatrix();
        
        if (mouseX > this.x - this.w/2 &&
            mouseX < this.x + this.w/2 &&
            mouseY > this.y - this.h/2 &&
            mouseY < this.y + this.h/2 &&
            transition.fade <= 0){
                this.h2 = lerp(this.h2, 100, 0.1);
                this.col2 = lerp(this.col2, 0, 0.1);
                this.col3 = lerp(this.col3, 0 ,0.1);
                
                if (mouse.click){
                    transition.reset();
                    transition.to = this.to;
                    transition.run();
                }
            } else {
                this.h2 = lerp(this.h2, 0, 0.1);
                this.col2 = lerp(this.col2, 255, 0.1);
                this.col3 = lerp(this.col3, 255, 0.1);
            }
    };
}
var startbutton = new button(width/2, 334, "Menu", 'menu');
var playbutton = new button(width/2, 264, "Play", 'game');
var helpbutton = new button(width/2, 387, "Help", 'help');
var shopbutton = new button(width/2, 512, "Sub", 'sub');
var backbutton = new button(500, 512, "Back", 'menu');

// Upgrades
function Item(x, y, price, name){
    this.x = x;
    this.y = y;
    this.price = price;
    this.name = name;
    this.bought = false;
    
    this.display = function(){
        pushStyle();
            noFill();
            strokeWeight(10);
            stroke(255);
            
            rect(this.x, this.y, 250, 100);
            
            noStroke();
            Text(this.name, this.x + 22, this.y + 24, -this.name.length*2 + 13, 255);
            Text("$" + this.price, this.x + 22, this.y + 60, 2, 255);
            Text(this.bought?"Buy":"Bought", this.x + 141, this.y + 39, 2.5, 255);
        popStyle();
    };
}
var speed = new Item(22, 189, 10, "Speed");
var jump = new Item(22, 291, 10, "Jump");

// OOP

function Block(x, y, type){
    this.x = x;
    this.y = y;
    this.w = blockSize;
    this.h = blockSize;
    this.type = type;
    
    this.draw = function() {
        image(imgs[this.type], this.x, this.y, this.w, this.h);
    };
}
function Fire(x, y){
    this.x = x;
    this.y = y;
    this.w = blockSize;
    this.h = blockSize;
    
    this.draw = function() {
        image(imgs.fire, this.x, this.y, this.w, this.h);
    };
}
function Sign(x, y){
    this.x = x;
    this.y = y;
    this.w = blockSize;
    this.h = blockSize;
    
    this.draw = function() {
        image(imgs.sign, this.x, this.y, this.w, this.h);
    };
}
function Water(x, y, dir){
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 5;
    this.col = random(150, 255);
    
    this.dir = dir;
    this.vx = random(4, 5);
    
    this.draw = function() {
        fill(0, 0, this.col);
        rect(this.x, this.y, this.w, this.h);
        
        this.x += this.dir==='right'?this.vx:-this.vx;
        
        for (var i = fires.length-1; i >= 0; i --){
            var f = fires[i];
            
            if (collide(this, f)){
                fires.splice(i, 1);
                this.dead = true;
            }
        }
    };
}

function Player(x, y){
    this.setx = x;
    this.sety = y;
    this.x = this.setx;
    this.y = this.sety;
    this.w = 45;
    this.h = 60;
    this.vx = 0;
    this.vy = 0;
    
    this.grav = 0.5;
    this.dir = 'right';
    this.stance = 1;
    this.deaths = 0;
    
    this.maxAmmo = 10;
    this.ammo = this.maxAmmo;
    this.money = 0;
    
    this.draw = function() {
        image(imgs["player"+this.dir+this.stance.toString()], this.x, this.y, this.w, this.h);
        
    };
    this.move = function() {
        this.x = constrain(this.x, 0, levels[lvl].map[0].length*60 - this.w);
        
        if (keys[LEFT]||keys.a){
            this.vx = -5;
            this.dir = 'left';
            void(frameCount%10===0?this.stance ++:0);
        } else if (keys[RIGHT]||keys.d){
            this.vx = 5;
            this.dir = 'right';
            void(frameCount%10===0?this.stance ++:0);
        }
        else {
            this.vx = 0;
            this.stance = 1;
        }
        if (this.stance>3){
            this.stance = 1;
        }
        
        this.x += this.vx;
        this.collide(this.vx, 0);
        
        if ((keys[UP]||keys.w)&&!this.falling){
            this.falling = true;
            this.vy = -13;
        }
        if (this.vy < 0){
            this.stance = 0;
        }
        this.vy += this.grav;
        this.y += this.vy;
        this.collide(0, this.vy);
        
        // Shooting
        if (keys[32] && frameCount % 20===0 && this.ammo > 0){
            for (var i = 0; i < 5; i ++){
            water.push(new Water(this.dir==='right'?this.x+20:this.x, this.y + random(30, 40), this.dir));
            }
            this.ammo --;
        }
        
        // Death after falling
        if (this.y > levels[lvl].map.length*60 + 500){
            this.respawn();
        }
    };
    this.respawn = function(){
        loadLevel(false);
        this.x = this.setx;
        this.y = this.sety;
        this.ammo = this.maxAmmo;
        this.deaths ++;
    };
    this.collide = function(vx, vy){
        for (var i = blocks.length-1; i >= 0; i --) {
            var b = blocks[i];
            if (!b.type.includes('spike')){
                if (collide(this, b)) {
                    if (b.type!=='ammo' &&
                        b.type!=='ladder'){
                        if (vy > 0) { 
                            this.vy = 0; 
                            this.falling = false;
                            this.y = b.y - this.h;
                        }
                        if (vy < 0) {
                            this.vy = 0;
                            this.falling = true;
                            this.y = b.y + b.h;
                        }
                        if (vx < 0) {
                            this.vx = 0;
                            this.x = b.x + b.w;
                            this.stance = 1;
                        }
                        if (vx > 0) { 
                            this.vx = 0; 
                            this.x = b.x - this.w;
                            this.stance = 1;
                        }
                    }
                    if (b.type==='ammo'){
                        this.ammo += 2;
                        blocks.splice(i, 1);
                    }
                    if (b.type==='ladder'){
                        if (keys[UP]||keys.w){
                            this.vy = -5;
                        } else if (keys[DOWN]||keys.s){
                            this.vy = 3;
                        } else {
                            this.vy = 1;
                        }
                    }
                }
            }
            if (b.type==='spike'){
                if (rectInTri(this, {
                    x1: b.x + b.w / 2,
                    y1: b.y + 15,
                    x2: b.x,
                    y2: b.y + b.h,
                    x3: b.x + b.w,
                    y3: b.y + b.h
                  })) {
                    this.respawn();
                }
            }
            if (b.type==='downspike'){
                if (rectInTri(this, {
                    x1: b.x + 20,
                    y1: b.y,
                    x2: b.x + b.w / 2,
                    y2: b.y + b.h,
                    x3: b.x + b.w - 20,
                    y3: b.y
                  })) {
                    this.respawn();
                }
            }
        }
        for (var i = 0; i < signs.length; i ++){
            if (collide(this, signs[i])){
                Text(levels[lvl].messages[i], signs[i].x - (levels[lvl].messages[0].length*10)/10, signs[i].y - 40, 1.5, 255);
            }
        }
        for (var i = 0; i < fires.length; i ++){
            if (collide(this, fires[i])){
                this.respawn();
            }
        }
    };
    this.display = function() {
        this.draw();
        this.move();
    };
}
var p = new Player(300, 300);

// Scenes
function loadLevel(next){
    blocks = [];
    enemies = [];
    portals = [];
    signs = [];
    fires = [];
    
    if (next){
        lvl ++;
        level = lvl+1;
        p.ammo = 10;
    }
    
    for (var i = 0; i < levels[lvl].map.length; i ++){
        for (var j = 0; j < levels[lvl].map[i].length; j ++){
            var x = j*blockSize;
            var y = i*blockSize;
            switch (levels[lvl].map[i][j]){
                case '#':
                    blocks.push(new Block(x, y, 'block'));
                break;
                case '%':
                    blocks.push(new Block(x, y, 'ammo'));
                break;
                case '^':
                    blocks.push(new Block(x, y, 'spike'));
                break;
                case 'v':
                    blocks.push(new Block(x, y, 'downspike'));
                break;
                case '$':
                    blocks.push(new Block(x, y, 'ladder'));
                break;
                case '*':
                    fires.push(new Fire(x, y, 'fire'));
                break;
                case '?':
                    signs.push(new Sign(x, y, 'sign'));
                break;
                case '@':
                    p.setx = x;
                    p.sety = y;
                    p.x = x;
                    p.y = y;
                break;
            }
        }
    }
}
loadLevel(false);

function load(){
    var key = Object.keys(imgs), l = key.length;
    
    imgs[key[curLoad]] = imgs[key[curLoad]]();
    curLoad++;
    
    background(0, 0, 0);
    
    noFill();
    
    fill(255);
    
    Text("Loading...", 200, 100, 4, 255);
    Text(curLoad + "/" + l + " images loaded", 150, 187, 3, 255);
    
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(50, 276, 500, 50);
    
    fill(255);
    rect(50, 276, (curLoad*500)/l, 50);
    
    
    if (curLoad >= Object.keys(imgs).length){
        scene = 'landing';
    }
}
function landing(){
    Text("Loaded!", 200, 100, 4, 255);
    Text("15 images were loaded", 105, 187, 3, 255);
    
    startbutton.display();
}
function menu(){
    noStroke();
    Text("EMBERS", 112, 68, 9, 255);
    
    playbutton.display();
    helpbutton.display();
    shopbutton.display();
    // minibutton.display();
}
function game(){
    // Camera
    pushMatrix();
    translate(-cam.x, -cam.y);
    
    cam.x = lerp(cam.x, p.x - width/2 + p.w/2, 0.1);
    cam.x = constrain(cam.x, 0, levels[lvl].map[0].length*60-600);
    cam.y = lerp(cam.y, p.y - height/2 + p.h/2, 0.1);
    
    blocks.forEach(function(b){
        if (onCanvas(b)){
            b.draw();
        }
    });
    signs.forEach(function(s){
        s.draw();
    });
    water.forEach(function(w){
        if (onCanvas(w)){ 
            w.draw(); 
        } else { 
            water.splice(w, 1); 
        }
        if (w.dead){
            water.splice(w, 5);
        }
    });
    fires.forEach(function(f){
        f.draw();
    });
    
    p.display();
    popMatrix();
    
    Text("Fires Left: " + fires.length + "\n" + round(p.ammo) + "/10 ammo left\n$" + p.money, 410, 9, 2, 255);
    Text("X: " + p.x + "\nY: " + round(p.y) + "\n" + round(fps) + " fps", 8, 9, 2, 255);
    Text(p.deaths + " deaths" + "\nLevel " + level + "\n" + levels[lvl].name, 15, 517, 2, 255);
    
    if (p.x > levels[lvl].map[0].length*60 - 45 && fires.length<=0){
        loadLevel(true);
    }
    
    if (lvl===10){
        fill(255, 255, 255, 150);
        rect(0, 0, width, height);
        
        Text("YOU WIN!", 74, 100, 10, 255);
        Text("Subscribe to me\nfor more games!", 120, 425, 4, 255);
    }
    else {
        backbutton.display();
    }
}
function help(){
    noStroke();
    Text("HELP", 228, 68, 6, 255);
    
    Text("Controls", 68, 161, 3, 255);
    Text("WASD or arrow keys\nto move. [SPACE] to shoot.", 68, 223, 2, 255);
    
    Text("avoid these...", 68, 321, 3, 255);
    Text("spikes and fire", 68, 358, 2, 255);
    
    image(imgs.spike, 68, 401, 60, 60);
    image(imgs.fire, 166, 401, 60, 60);
    
    Text("goal?", 68, 482, 3, 255);
    Text("beat all levels\nput all fire out to continue", 68, 531, 2, 255);
    
    backbutton.display();
}
function sub(){
    Text("SUB", 228, 68, 6, 255);
    Text("Make sure you subscribe for more awesome stuff coming\nfrom Team Levi in Clash of Code", 55, 162, 3, 255);
    
    clearLogs();
    println("Subscribe to team Levi here!\nhttps://www.khanacademy.org/computer-programming/team-levi-coc-2023/5151245111443456");
    
    backbutton.display();
}

draw = function() {
    try{
    if(scene !== 'load'){
        for (var i = 0; i < height; i ++){
            var c1 = color(255, 136, 0);
            var c2 = color(255, 55, 0);
            
            stroke(lerpColor(c1, c2, i/height));
            line(0, i, width, i);
        }
    }
    else clear()
    noStroke();
    
    switch(scene){
        case 'load':
            rectMode(0)
            load();
        break;
        case 'landing':
            landing();
        break;
        case 'menu':
            menu();
        break
        case 'game':
            game()
        break
        case 'help':
            help()
        break
        case 'sub':
            sub()
    }
    if (scene !== 'load'){
        transition.init();
        transition.run();
    }
    mouse.click = false;
    }catch(e){clearLogs(); println(e.stack);}
};
