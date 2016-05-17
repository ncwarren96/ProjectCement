document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;
document.onmousedown = handleMouseDown;

		
// this is the code i came up with for mouse select and deselect not sure how to make it work?	
var x; 
var y; 
select = false; 
				
function select(e) {
	x = e.clientX;
	y = e.clientY;
	select = true; 
		}

function deselect(e) {
	select = false; 
}
////////////////////////

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
		showDialogue("test", 0);
	}

	return;;
}