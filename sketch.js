var prisoner, prisonerIdleImg, prisonerLeftImg, prisonerRightImg;
var bgImg;
var invisibleGround;

function preload(){
    prisonerIdleImg = loadImage("assets/Prisoner_Idle-removebg-preview.png")
    prisonerLeftImg = loadImage("assets/Prisoner_Running-removebg-preview(1).png")
    prisonerRightImg = loadImage("assets/Prisoner_Running-removebg-preview.png")
    bgImg = loadImage("assets/Background.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    invisibleGround = createSprite(windowWidth/2, windowHeight-20, windowWidth, 10);
    
    prisoner = createSprite(100,windowHeight-50,20,20)
    prisoner.addImage("idle",prisonerIdleImg);
    prisoner.addImage("left",prisonerLeftImg);
    prisoner.addImage("right",prisonerRightImg);
    
    prisoner.scale = 0.3;

}

function draw(){
    background(bgImg);


    if(keyIsDown(UP_ARROW)){
        prisoner.y = prisoner.y -5;
    }

    if(keyIsDown(LEFT_ARROW)){
        prisoner.changeImage("left");
        prisoner.x = prisoner.x -5;
    }

    if(keyWentUp(LEFT_ARROW)){
        prisoner.changeImage("idle");
    }

    if(keyIsDown(RIGHT_ARROW)){
        prisoner.changeImage("right");
        prisoner.x = prisoner.x +5;
    }

    if(keyWentUp(RIGHT_ARROW)){
        prisoner.changeImage("idle");
    }

    if(keyIsDown(DOWN_ARROW)){
        prisoner.y = prisoner.y +5
    }

    prisoner.y = prisoner.y + 2.5;

    prisoner.collide(invisibleGround);

    drawSprites()
}