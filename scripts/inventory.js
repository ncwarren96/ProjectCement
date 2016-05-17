function createInventory(){
	inventory = new createjs.Container();
	inventory.x = 10;
	inventory.y = 10;
	stage.addChild(inventory);
}

function hideShowInventory(){
	console.log("hideShowInventory");
	for(var iter = 0; iter < inventory.children.length;iter++){
		var child_iter = inventory.getChildAt(iter);
		if(child_iter.x > 0){
			child_iter.x -= 100;
		}else{
			child_iter.x += 100;
		}
	}
	
}

function addToInventory(item){
	inventory.addChild(item);
}

function removeFromInventory(item){
	inventory.removeChild(item);
}