var keys = new Array();

var stage, circle, rect, bmp, cop, clue, petey, inventory;
var points;
function init() {
	stage = new createjs.Stage("demoCanvas"); //stage object 
	var image = new Image();				 // image object for background 
	image.src = "./assets/background.png";	  // image source 
	bmp = new createjs.Bitmap(image);		
	var container = new createjs.Container();
	stage.addChild(container);				// not sure waht addChild is ? 
	container.addChild(bmp);
	bmp.x = -800;
	bmp.y = 0;
	
	//Adding Clue
	var graphics = new createjs.Graphics().beginFill("Red").drawRect(0, 0, 10, 10);
	clue = new createjs.Shape(graphics);
	clue.x = 0;
	clue.y = 0;
 	stage.addChild(clue);
 	clue.addEventListener("click", handleClick_clue);
 	

 	clue1 = new Clue(200, 200, 1, "./assets/clue1.png", 24,24);
 	stage.addChild(clue1);
 	clue1.addEventListener("click", handleClick_clue);
 	
 	clue2 = new Clue(300, 200, 1, "./assets/clue2.png", 24,24);
 	stage.addChild(clue2);
 	clue3 = new Clue(400, 200, 1, "./assets/clue3.png", 24,24);
 	stage.addChild(clue3);
 	
 	//Adding Player
	var playerData = new createjs.SpriteSheet({		// investigator/player 
		images: ["./assets/Character.png"],			// image source for inverstigator
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
	
	//Adding Cop (NPC object instance)
	cop = new NPC(100, 235, 1, "./assets/Copper.png", 35, 135);
	stage.addChild(cop);
	cop.addEventListener("click", handleClick_cop);
	function handleClick_cop(event) {
	    console.log("cop clicked.");
	    if(getDistance(cop.x, cop.y, player.x, player.y) < 100){
	    	showDialogue("cop_beach", 0);
	    }
	 }
	
	//Adding Petey (NPC object instance)
	petey = new NPC(100, 235, 1, "./assets/petey.png", 213, 112);
	stage.addChild(petey);
	
	//Create ticket (game loop)
	createjs.Ticker.on("tick", game_loop);
}


function game_loop(event) {
	update();
	draw();
}


function update(){
	createInventory();
	move(player);
	stickToBackground(cop, cop.back.x, cop.back.y);	// draw the sprites on the screen. 
	stickToBackground(clue1, 1300, 500);
	stickToBackground(clue2, 1400, 500);
	stickToBackground(clue3, 1500, 500);
	stickToBackground(petey, 2000, 450);
	
	//Display background mouse position in console
	var mouse = getBackgroundPosition(stage.mouseX, stage.mouseY);
	//console.log("x: " + mouse.x + " y: " + mouse.y);

}

function draw(event){
	stage.update(event);
}


//*********************************Helper Functions*************************

function getDistance(x, y, x2, y2){
	return Math.sqrt(Math.pow((y2 - y), 2) + Math.pow((x2 - x), 2));
}

function getBackgroundPosition(x, y){
	var backX = bmp.x*(-1)+x;
	var backY = y;
	var back = {
		x: backX,
		y: backY
	};
	return back;
}
		
function handleClick_clue(event){
	console.log("clicked on clue");
	var dist = getDistance(player.x, player.y, clue.x, clue.y);
	if(dist < 135){
		console.log("yes");
		stage.removeChild(clue1);
		points ++;
	}
}	


			