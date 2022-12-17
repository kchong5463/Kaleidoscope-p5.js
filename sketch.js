let d;
let div = 6;
let sym = 180/div;

function setup(){
  createCanvas(500,500);
  angleMode(DEGREES)
}

function draw(){
  background('purple');
  stroke('violet')
  d = map(mouseX,0,width,0,90)
  for (i= 0; i < 360; i += sym){
    push()
    translate(width/2,height/2)
    rotate(i)
    branch(40+d)
    pop()
  }
}

function branch(br){
  line(0,0,0, -br)
  translate(0, -br)
  if(br > 3){
    push()
    rotate(d)
    branch(br *0.2)
    pop()
    push()
    rotate(d)
    branch(br*0.9)
    pop()
  }
}
