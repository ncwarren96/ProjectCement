function inventory(){
	inventory = new createjs.Container();
	stage.addChild(inventory);
	inventory.x = 10;
	inventory.y = 10;
	var image_1 = new Image();
	image_1.src = "./assets/blue_square.png";
	bmp_1 = new createjs.Bitmap(image_1);
	inventory.addChild(bmp_1);
}
