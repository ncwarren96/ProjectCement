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
	if(e.keyCode == 9){
		console.log("hideShowInventory()");
		hideShowInventory();
	}
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
		var image_1 = new Image();
		image_1.src = "./assets/blue_square.png";
		var bit = new createjs.Bitmap(image_1);
		addToInventory(bit);
		bit.on("click", blue_square, null, false);
		function blue_square(evt) {
			removeFromInventory(bit);
        }
	}
	if(e.button == 1){//middle mouse button
		//loadMap("beach", "empty");
	}
	if(e.button == 0){//left mouse button
		//loadMap("empty", "beach");
	}

	return;;
}