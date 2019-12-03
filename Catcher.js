var kurv;

const B_WIDTH = 30;

function setup() {
    createcanvas(400, 600);

    kurv = createVector(width / 2, height - 50);

}

function draw() {
    background(51);

    basket.x = constrain(MusX, 0, width)

    Handlekurv();
}

function Handlekurv() {
    basket.x = constrain(MusX, 0, width)

    stroke(255);
    strokeWeight(5);
    beginShape();
    vertex()


}