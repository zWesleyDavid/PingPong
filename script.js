
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let xVelocidade = 5;
let yVelocidade = 5;
let raio = diametro / 2;
let xRaquete = 0;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);

    xBolinha += xVelocidade;
    yBolinha += yVelocidade;

    if (xBolinha + raio >= 600 || xBolinha - raio <= 0) {
        xVelocidade *= -1;
    }

    if (yBolinha + raio >= 400 || yBolinha - raio <= 0) {
        yVelocidade *= -1;
    }

    rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);

    if (keyIsDown(UP_ARROW) === true) {
        yRaquete -= 5;
    }

    if (keyIsDown(DOWN_ARROW) === true) {
        yRaquete += 5;
    }

}