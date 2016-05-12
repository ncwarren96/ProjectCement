function move(sprite){
	var pt = sprite.localToGlobal(0, 0);
	var gWidth = stage.canvas.width;
	var gHeight = stage.canvas.height;
	
	if(keys[KEYCODE_A] === true && sprite.x > 0){
		if(pt.x > 200 || bmp.x >= 0){
			sprite.x -= 10;
		}else{
			sprite.x = 200;
			bmp.x += 10;
		}
	}
	if(keys[KEYCODE_D] === true && sprite.x < gWidth-24){
		if(pt.x < gWidth-176 || bmp.x+1600 <= 0){
			sprite.x += 10;
		}else{
			sprite.x = gWidth-176;
			bmp.x -= 10;
		}
	}
	
	if(keys[KEYCODE_W] === true && sprite.y>0){
		sprite.y -= 10;
	}
	if(keys[KEYCODE_S] === true && sprite.y < gHeight-81){
		sprite.y += 10;
	}
	
	if(sprite.x+24 > gWidth){
		sprite.x = gWidth -24;
	}else if(sprite.x < 0){
		sprite.x = 0;
	}
	if(sprite.y+81 > gHeight){
		sprite.y = gHeight - 81;
	}else if(sprite.y < 0){
		sprite.y = 0;
	}
	
}