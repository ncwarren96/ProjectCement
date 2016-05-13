var keys = new Array();

var stage, circle, rect, bmp, cop, clue;
function init() {
	stage = new createjs.Stage("demoCanvas");
	var image = new Image();
	image.src = "./assets/background.png";
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	stage.addChild(container);
	container.addChild(bmp);
	bmp.x = -800;
	bmp.y = 0;
	
	var graphics = new createjs.Graphics().beginFill("Red").drawRect(0, 0, 10, 10);
	clue = new createjs.Shape(graphics);
	clue.x = 0;
	clue.y = 0;
 	stage.addChild(clue);
 	
	var playerData = new createjs.SpriteSheet({
		images: ["./assets/Character.png"],
		frames: {width: 40, height: 135, count: 2},
		animations: {
			right: 0,
			left: 1
		}
	});
	player = new createjs.Sprite(playerData);
	player.x = 400;
	player.y = 235;
	stage.addChild(player);
	
	var copData = new createjs.SpriteSheet({
		images: ["./assets/Copper.png"],
		frames: {width: 35, height: 135, count:1},
	});
	cop = new createjs.Sprite(copData);
	cop.x = 100;
	cop.y = 235;
	stage.addChild(cop);
	

	
	createjs.Ticker.on("tick", game_loop);
}

function game_loop(event) {
	update();
	draw();
}


function update(){
	move(player);
	stickToBackground(cop, 1182, 235);
	stickToBackground(clue, 1300, 500);
	//clueCollision(clue);
	//console.log("x: " + stage.mouseX + " y: " + stage.mouseY);
	//var pt = player.localToLocal(bmp.x, bmp.y);
	//console.log("px:"+ pt.x + " py:"+ pt.y);
	//addCollisionCircle(clue);
}

function draw(event){
	stage.update(event);
}



			