let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

const velocidadeInicial = 5;
let xVelocidade = velocidadeInicial;
let yVelocidade = velocidadeInicial;

let xRaquete1 = 0;
let yRaquete1 = 150;
let xRaquete2 = 590;
let yRaquete2 = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

let pontosJogador1 = 0;
let pontosJogador2 = 0;

const TECLA_W = 87;
const TECLA_S = 83;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostrarBolinha();
    movimentarBolinha();
    verificarColisaoBolinha();

    mostrarRaquete(xRaquete1, yRaquete1);
    mostrarRaquete(xRaquete2, yRaquete2);

    movimentarRaquete1();
    movimentarRaquete2();

    verificarColisaoRaquete(xRaquete1, yRaquete1, 1);
    verificarColisaoRaquete(xRaquete2, yRaquete2, -1);

    mostrarPontuacao();
    atualizarPontuacao();
}

function mostrarBolinha() {
    fill(255);
    circle(xBolinha, yBolinha, diametro);
}

function movimentarBolinha() {
    xBolinha += xVelocidade;
    yBolinha += yVelocidade;
}

function verificarColisaoBolinha() {
    if (xBolinha + raio >= width || xBolinha - raio <= 0) {
        xVelocidade *= -1;
    }
    if (yBolinha + raio >= height || yBolinha - raio <= 0) {
        yVelocidade *= -1;
    }
}

function mostrarRaquete(x, y) {
    fill(255);
    rect(x, y, comprimentoRaquete, larguraRaquete);
}

function movimentarRaquete1() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete1 -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete1 += 5;
    }
    yRaquete1 = constrain(yRaquete1, 0, height - larguraRaquete);
}

function movimentarRaquete2() {
    if (keyIsDown(TECLA_W)) {
        yRaquete2 -= 5;
    }
    if (keyIsDown(TECLA_S)) {
        yRaquete2 += 5;
    }
    yRaquete2 = constrain(yRaquete2, 0, height - larguraRaquete);
}

function verificarColisaoRaquete(x, y, direcao) {
    if (
        xBolinha - raio < x + comprimentoRaquete &&
        xBolinha + raio > x &&
        yBolinha + raio > y &&
        yBolinha - raio < y + larguraRaquete
    ) {
        xVelocidade *= -1;
        xBolinha = x + (direcao * (comprimentoRaquete + raio));
    }
}

function mostrarPontuacao() {
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(pontosJogador1, width / 4, 20);
    text(pontosJogador2, (3 * width) / 4, 20);
}

function atualizarPontuacao() {
    if (xBolinha - raio <= 0) {
        pontosJogador2++;
        reiniciarBolinha();
    }
    if (xBolinha + raio >= width) {
        pontosJogador1++;
        reiniciarBolinha();
    }
}

function reiniciarBolinha() {
    xBolinha = width / 2;
    yBolinha = height / 2;
    xVelocidade = random([-velocidadeInicial, velocidadeInicial]);
    do {
        yVelocidade = random([-velocidadeInicial, velocidadeInicial]);
    } while (abs(yVelocidade) < 2);
}
