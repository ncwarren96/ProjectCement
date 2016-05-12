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
	
	circle = stage.addChild(new createjs.Shape());
	circle.graphics.beginFill("red").drawCircle(50,50,50);
	circle.x = 350;
	circle.y = 250;
	
	createjs.Ticker.on("tick", game_loop);
}

function game_loop(event) {
	update();
	draw();
}


function update(){
	move();
}

function draw(event){
	stage.update(event);
}



			