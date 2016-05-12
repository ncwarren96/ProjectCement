var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_S = 83;
var KEYCODE_D = 68;

var keys = new Array();

var stage, circle, rect, bmp;
function init() {
	stage = new createjs.Stage("demoCanvas");
	var image = new Image();
	image.src = "./assets/TestBackground.png";
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	stage.addChild(container);
	container.addChild(bmp);
	bmp.x = -800;
	bmp.y = 0;
	
	var playerImage = new Image();
	playerImage.src = "./assets/Character.png";
	player = new createjs.Bitmap(playerImage);
	player.x = 350;
	player.y = 250;
	stage.addChild(player);
	console.log("player width: "+player.image.width+", height: "+player.image.height);
	
	createjs.Ticker.on("tick", game_loop);
}

function game_loop(event) {
	update();
	draw();
}


function update(){
	move(player);
}

function draw(event){
	stage.update(event);
}



			