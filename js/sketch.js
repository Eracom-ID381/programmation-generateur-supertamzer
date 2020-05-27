// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    maillot = new Maillot(width / 2 - 160, height / 2 + 120, 300, 255);

}

function draw() {

    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {

        maillot.shape();
        maillot.generator();

    }
}

// Fonction avec quatres paramètres

// function generator(x, y, size) {
//
//     fill(random(0, 255), random(0, 150), random(0, 255));
//
//     noStroke();
//     var numbers = []
//     for (var n = 1; n < 99; n++) {
//         if (n <= 9) {
//             n = ("0" + n).slice(-2);
//         }
//         numbers.push(n.toString());
//     }
//     textSize(size)
//     text(random(numbers), x, y)
//
// }

class Maillot {
    constructor(x, y, size, stroke) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.stroke = stroke;
    }
    generator() {

        fill(random(0, 255), random(0, 150), random(0, 255));

        noStroke();
        var numbers = []
        for (var n = 1; n < 99; n++) {
            if (n <= 9) {
                n = ("0" + n).slice(-2);
            }
            numbers.push(n.toString());
        }
        textSize(this.size)
        text(random(numbers), this.x, this.y)

    }
    shape() {
        stroke(this.stroke);
        fill(random(150, 255), random(150, 255), random(150, 255));
        beginShape();
        vertex(windowWidth / 2 - 100, 200);
        vertex(windowWidth / 2 - 230, 240);
        vertex(windowWidth / 2 - 350, 350);
        vertex(windowWidth / 2 - 270, 440);
        vertex(windowWidth / 2 - 190, 370);
        vertex(windowWidth / 2 - 190, 700);

        vertex(windowWidth / 2 + 190, 700);
        vertex(windowWidth / 2 + 190, 370);
        vertex(windowWidth / 2 + 270, 440);
        vertex(windowWidth / 2 + 350, 350);
        vertex(windowWidth / 2 + 230, 240);
        vertex(windowWidth / 2 + 100, 200);

        endShape(CLOSE);
    }
}




function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}