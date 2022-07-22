let guesses = ["", "", ""];
let tiles = [0, 0, 0];
let pos = 0;
let letters = [];
let keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let usables;
let definites;
let possibles = [];
let out = "";
let len = "";

function setup() {
    const cnv = createCanvas(975, 600);
    cnv.center('horizontal');
    background(235);
    textSize(32);
    text("THIRDLE SOLVER", 417, 50);

    for (let i = 0; i < 26; i++) {
        letters.push(0);
    }

    reform();
}

function draw() {
    draw_letters();
    for (let c = 0; c < 3; c++){
        fill(12, 200, 12);
        stroke(0, 255, 0);
        rect(400 + c * 60, 100, 55, 55);
        color_stroke(0, 0, 0);
        text(guesses[c], 415 + c * 60, 140);
    }

    fill(215, 215, 215);
    stroke(200, 200, 200);

    rect(130, 220, 175, 40);
    rect(0, 300, 975, 300);
    out = "";
    len = "";
    for (let i = 0; i < possibles.length; i++) {
        out += possibles[i] + " ";
        if (i % 11 === 0 && i != 0) {
            out += "\n";
        }
    }
    len = String(possibles.length);
    color_stroke(0, 0, 0);
    text(out, 0, 350);
    text(len, 140, 250);
}
