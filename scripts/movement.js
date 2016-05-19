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
	
	//Directional Movement
	//Left
	if(keys[KEYCODE_A] === true && sprite.x > 0){
		if(sprite.currentFrame != 1){
			sprite.advance();
		}
		if(pt.x > 200 || bmp.x >= 0){
			tempSpriteX -= moveAmount;
		}else{
			sprite.x = 200;
			tempBackX = moveAmount;
		}
	}
	//Right
	if(keys[KEYCODE_D] === true && sprite.x < gWidth-sWidth){
		if(sprite.currentFrame != 0){
			sprite.advance();
		}
		if(pt.x < gWidth-200-sWidth || bmp.x+1600 <= 0){
			tempSpriteX += moveAmount;
		}else{
			sprite.x = gWidth-200-sWidth;
			tempBackX -= moveAmount;
		}
	}
	
	//Up
	if(keys[KEYCODE_W] === true && sprite.y>370-sHeight){
		tempSpriteY -= moveAmount;
	}
	//Down
	if(keys[KEYCODE_S] === true && sprite.y < gHeight-sHeight){
		tempSpriteY += moveAmount;
	}
	
	//console.log(bmp_1.hitTest(sprite.x, sprite.y));
	if(bmp_1.hitTest(sprite.x, sprite.y)){
		tempSpriteX = 0;
		tempBackX = 0;
	}
	
	sprite.x += tempSpriteX;
	sprite.y += tempSpriteY;
	bmp.x += tempBackX;
	bmp_1.x += tempBackX;
	
	checkOnStage(sprite, gWidth, gHeight, sWidth, sHeight);
}

function checkOnStage(sprite, stW, stH, pW, pH){
	if(sprite.x+pW > stW){
		sprite.x = stW - pW;
	}else if(sprite.x < 0){
		sprite.x = 0;
	}
	if(sprite.y+pH > stH){
		sprite.y = stH - pH;
	}else if(sprite.y < 330-pH){
		sprite.y = 370-pH;
	}
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



