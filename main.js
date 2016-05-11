
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

var KEYCODE_UP = 38;		//useful keycode
var KEYCODE_LEFT = 37;		//useful keycode
var KEYCODE_RIGHT = 39;		//useful keycode
var KEYCODE_DOWN = 40;

var keys = new Array();

var stage, circle, rect, bmp;
function init() {
	stage = new createjs.Stage("demoCanvas");
	var image = new Image();
	image.src = "./TestBackground.png";
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
	
	if(keys[KEYCODE_LEFT] === true && circle.x>0){
		if(pt.x > 200 || bmp.x >= 0){
			circle.x -= 10;
		}else{
			bmp.x += 10;
		}
	}
	
	if(keys[KEYCODE_RIGHT] === true && circle.x<stage.canvas.width-100){
		if(pt.x < 500 || bmp.x+1600 <= 0){
			circle.x += 10;
		}else{
			bmp.x -= 10;
		}
	}
	
	if(keys[KEYCODE_UP] === true && circle.y>0){
		circle.y -= 10;
	}
	
	if(keys[KEYCODE_DOWN] === true && circle.y<stage.canvas.height-100){
		circle.y += 10;
	}
	
}

function handleKeyDown(e){
	if(!e){
		var e = window.event;
	}
	keys[e.keyCode] = true;
	return false;
}

function handleKeyUp(e){
	if(!e){
		var e = window.event;
	}
	keys[e.keyCode] = false;
	return false;
}
			