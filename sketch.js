var ball =  {
x:200,
y:200,
r:20,
xspeed:0,
yspeed:0,
color:["red","blue","green","purple"]
}
function setup() {
  createCanvas(400, 400);

}



function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[1])
  ball.xspeed = 1;
  ball.x=ball.x+ball.xspeed
}