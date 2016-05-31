function createInventory(){
	inventory.x = 10;
	inventory.y = 10;
	stage.addChild(inventory);
}

function moveInventory(){
	inventory.x = 10;
	inventory.y = 10;
}

function hideShowInventory(){
	if(inventory.alpha == 1.0){
		inventory.alpha = 0;
	}else{
		inventory.alpha = 1;
	}
	
}
function drawClues(array){
	for(var i = 0; i<array.length; i++){
		console.log("draw clue " + i);
		array[i].y = 0;
		array[i].x = i*50;
	}
}
function addToInventory(item){
	//console.log("added");
	inventory.addChild(item);
	found_clues.push(item);
	drawClues(found_clues);
}

function removeFromInventory(item){
	console.log("remove");
	var index = found_clues.indexOf(item);
	found_clues.splice(index, 1);
	inventory.removeChild(item);
	drawClues(found_clues);
}