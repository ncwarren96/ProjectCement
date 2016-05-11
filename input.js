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