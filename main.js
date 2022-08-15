function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(0,128,0)
    stroke(0,128,0)
    circle(52,52,70)
    circle(602,52,70)
    circle(52,602,70)
    circle(602,602,70)
}

function take_snapshot(){
    save('persons_name.png');
}

