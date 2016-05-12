function move(){
	var pt = circle.localToGlobal(0, 0);
	
	if(keys[KEYCODE_A] === true && circle.x>0){
		if(pt.x > 200 || bmp.x >= 0){
			circle.x -= 10;
		}else{
			bmp.x += 10;
		}
	}
	
	if(keys[KEYCODE_D] === true && circle.x<stage.canvas.width-100){
		if(pt.x < 500 || bmp.x+1600 <= 0){
			circle.x += 10;
		}else{
			bmp.x -= 10;
		}
	}
	
	if(keys[KEYCODE_W] === true && circle.y>0){
		circle.y -= 10;
	}
	
	if(keys[KEYCODE_S] === true && circle.y<stage.canvas.height-100){
		circle.y += 10;
	}
}