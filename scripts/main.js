var keys = new Array();

var stage, circle, rect, bmp;
function init() {
	stage = new createjs.Stage("demoCanvas");
	var image = new Image();
	image.src = "./assets/Background1.png";
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	stage.addChild(container);
	container.addChild(bmp);
	bmp.x = -800;
	bmp.y = 0;
	
	var playerData = new createjs.SpriteSheet({
		images: ["./assets/Character.png"],
		frames: {width: 40, height: 135, count: 2},
		animations: {
			right: 0,
			left: 1
		}
	});
	
	player = new createjs.Sprite(playerData);
	player.x = 350;
	player.y = 250;
	
	stage.addChild(player);
	
	createjs.Ticker.on("tick", game_loop);
}

function game_loop(event) {
	update();
	draw();
}


function update(){
	move(player)
}

function draw(event){
	stage.update(event);
}



			