// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {

    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {

        stroke(255);
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
        generator(width / 2 - 160, height / 2 + 120, 300);

    }
}

// Fonction avec quatres paramètres

function generator(x, y, size) {

    fill(random(0, 255), random(0, 150), random(0, 255));

    noStroke();
    var numbers = []
    for (var n = 1; n < 99; n++) {
        if (n <= 9) {
            n = ("0" + n).slice(-2);
        }
        numbers.push(n.toString());
    }
    textSize(size)
    text(random(numbers), x, y)
}

function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}