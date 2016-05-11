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
	
	createjs.Ticker.on("tick", tick);
}

function tick(event) {
	moveCircle();
	stage.update(event);
}

function moveCircle(){
	var pt = circle.localToGlobal(0, 0);
	
	if(keys[KEYCODE_A] === true && circle.x>0){
		if(pt.x > 200 || bmp.x >= 0){
			circle.x -= 10;
		}else{
			bmp.x += 10;
		}
	}
	
	if(keys[KEYCODE_D] === true && circle.x<stage.canvas.width-100){
		if(pt.x < 500 || bmp.x+1600 <= 0){
			circle.x += 10;
		}else{
			bmp.x -= 10;
		}
	}
	
	if(keys[KEYCODE_W] === true && circle.y>0){
		circle.y -= 10;
	}
	
	if(keys[KEYCODE_S] === true && circle.y<stage.canvas.height-100){
		circle.y += 10;
	}
	
}


			