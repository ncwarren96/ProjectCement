//Run this in update() to attach new sprite/object to background
function stickToBackground(sprite, x, y){
	var pt = bmp.localToGlobal(x,y);
	sprite.x = pt.x;
	sprite.y = pt.y;
}

/*==THIS SHIT IS STILL IN PROGRESS==*/
/*
//Adds a circle around an object for measuring collision (currently BLUE for debug, also broken)
function addCollisionCircle(object){
	var graphics = new createjs.Graphics().beginStroke("Blue").drawCircle(0, 0, 50, 50);
	var circle = new createjs.Shape(graphics);
 	stage.addChild(circle);
 	stickToBackground(circle, 1300, 500);
}
function clueCollision(object){
	if(object.hitTest(stage.mouseX, stage.mouseY)){ 
		console.log("mouse in") ;
		}
}
*/	



