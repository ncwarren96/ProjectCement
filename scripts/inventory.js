function createInventory(){
	inventory.x = 10;
	inventory.y = 10;
	stage.addChild(inventory);
}

function hideShowInventory(){
	if(inventory.alpha == 1.0){
		inventory.alpha = 0;
	}else{
		inventory.alpha = 1;
	}
	
}

function addToInventory(item){
	inventory.addChild(item);
}

function removeFromInventory(item){
	inventory.removeChild(item);
}