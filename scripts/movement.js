function move(sprite){
	var pt = sprite.localToGlobal(0, 0);
	var gWidth = stage.canvas.width;
	var gHeight = stage.canvas.height;
	var sheet = sprite.spriteSheet;
	var sWidth = sheet._frameWidth;
	var sHeight = sheet._frameHeight;
	
	if(keys[KEYCODE_A] === true && sprite.x > 0){
		if(sprite.currentFrame != 1){
			sprite.advance();
		}
		if(pt.x > 200 || bmp.x >= 0){
			sprite.x -= 10;
		}else{
			sprite.x = 200;
			bmp.x += 10;
		}
	}
	if(keys[KEYCODE_D] === true && sprite.x < gWidth-sWidth){
		if(sprite.currentFrame != 0){
			sprite.advance();
		}
		if(pt.x < gWidth-200-sWidth || bmp.x+1600 <= 0){
			sprite.x += 10;
		}else{
			sprite.x = gWidth-200-sWidth;
			bmp.x -= 10;
		}
	}
	
	if(keys[KEYCODE_W] === true && sprite.y>330-sHeight){
		sprite.y -= 10;
	}
	if(keys[KEYCODE_S] === true && sprite.y < gHeight-sHeight){
		sprite.y += 10;
	}
	
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
		sprite.y = 330-pH;
	}
}
