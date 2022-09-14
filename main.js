function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 100,100, 100, 100)
    fill("green")
    circle(30,30,50)
    circle(270,30,50)
    circle(30,270,50)
    circle(270,270,50)
    fill("blue")
    rect(50,20,200,20)
    rect(50,260,200,20)
    rect(20,50,20,200)
    rect(260,50,20,200)
}