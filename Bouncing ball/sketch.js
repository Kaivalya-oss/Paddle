//game
// for the variable
var paddle;
var block1 , block2 , block3 , block4 , block5 , block6 , block7 , block8;
var ball;
var edges;

function setup(){
    createCanvas(600,450);
    paddle = createSprite(300,430,90,20);
    paddle.shapeColor = "#32f2eb";
    // for the paddle
    for(var i = 50 ; i<600 ; i = i+80){
        block1 = createSprite(i,50,50,20);
        block1.shapeColor = "#27ef1c";
    }
    for(var k = 90 ; k<600 ; k = k+80){
        block2 = createSprite(k,85,50,20);
        block2.shapeColor = "#09b6ef";
    }
    for(var m = 50 ; m<600 ; m = m+80){
        block3 = createSprite(m,120,50,20);
        block3.shapeColor = "#27ef1c";
    }
    for(var n = 90 ; n<600 ; n = n+80){
        block4 = createSprite(n,155,50,20);
        block4.shapeColor = "#09b6ef";
    }
    for(var o = 50 ; o<600 ; o = o+80){
        block5 = createSprite(o,190,50,20);
        block5.shapeColor = "#27ef1c";
    }
    for(var p = 90 ; p<600 ; p = p+80){
        block6 = createSprite(p,225,50,20);
        block6.shapeColor = "#09b6ef";
    }
    for(var q = 50 ; q<600 ; q = q+80){
        block7 = createSprite(q,255,50,20);
        block7.shapeColor = "#27ef1c";
    }
    for(var r = 90 ; r<600 ; r = r+80){
        block8 = createSprite(r,290,50,20);
        block8.shapeColor = "#09b6ef";
    }
    ball = createSprite(500,400,20,20);
    

}

function draw(){
    background("#d7dbaf");
    // for the movement of Paddle
    paddle.x = World.mouseX;
    // for ball
    if(keyDown("space")){
        ball.velocityX = -5;
        ball.velocityY = -5;
    }    

    // for the edge
    edges = createEdgeSprites();
    // ball.bounceOff(LeftEdge);
    drawSprites();
}
