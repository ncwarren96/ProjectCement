function move(sprite){
	var KEYCODE_W = 87;
	var KEYCODE_A = 65;
	var KEYCODE_S = 83;
	var KEYCODE_D = 68;
	
	var pt = sprite.localToGlobal(0, 0);
	var gWidth = stage.canvas.width;
	var gHeight = stage.canvas.height;
	var sheet = sprite.spriteSheet;
	var sWidth = sheet._frameWidth;
	var sHeight = sheet._frameHeight;
	var moveAmount = 10;
	
	var tempSpriteX = 0, tempSpriteY = 0;
	var tempBackX = 0;
	
	var backPoint = getBackgroundPosition(sprite.x, sprite.y);
	
	//Directional Movement
	//Left
	if(keys[KEYCODE_A] === true && sprite.x > 0){
		if(sprite.currentFrame != 1){
			sprite.advance();
		}
		if(pt.x > 200 || bmp.x >= 0){
			tempSpriteX -= moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				tempSpriteX = 0;
			}
		}else{
			sprite.x = 200;
			tempBackX = moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				tempSpriteX = 0;
			}
		}
	}
	//Right
	if(keys[KEYCODE_D] === true && sprite.x < gWidth-sWidth){
		if(sprite.currentFrame != 0){
			sprite.advance();
		}
		if(pt.x < gWidth-200-sWidth || bmp.x+1600 <= 0){
			tempSpriteX += moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				tempSpriteX = 0;
			}else if(backPoint.y+135 === gHeight){
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+134+tempSpriteY)){
					tempSpriteX = 0;
				}
			}
		}else{
			sprite.x = gWidth-200-sWidth;
			tempBackX -= moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				tempBackX = 0;
				console.log(tempBackX);
			}else if(backPoint.y+135 === gHeight){
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+134+tempSpriteY)){
					tempSpriteX = 0;
				}
			}
		}
	}
	
	//Up
	if(keys[KEYCODE_W] === true){
		tempSpriteY -= moveAmount;
		if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
			tempSpriteY = 0;
		}
	}
	//Down
	if(keys[KEYCODE_S] === true && sprite.y < gHeight-sHeight){
		tempSpriteY += moveAmount;
		if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				tempSpriteY = 0;
			}
	}
	
	sprite.x += tempSpriteX;
	sprite.y += tempSpriteY;
	bmp.x += tempBackX;
	bmp_1.x += tempBackX;
	
}

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



