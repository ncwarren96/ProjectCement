document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;
document.onmousedown = handleMouseDown;


function handleKeyDown(e){
	if(!e){
		var e = window.event;
	}
	keys[e.keyCode] = true;
	return false;
}

function handleKeyUp(e){
	if(!e){
		var e = window.event;
	}
	keys[e.keyCode] = false;
	return false;
}

function handleMouseDown(e){
	if(!e){
		var e = window.event;
	}
	if(e.button == 2){//right click
		showDialogue("test", 1);
	}

	return;;
}