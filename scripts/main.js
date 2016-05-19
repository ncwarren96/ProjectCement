var keys = new Array();
var stage, player, circle, rect, bmp, bmp_1, cop, clue, petey, guy1, guy2, inventory;
var points = 0;
var clues = [];
var found_clues = [];
var map_array = [];
inventory = new createjs.Container();

var beachMap = new map("beach");
var emptyMap = new map("empty");
map_array.push(beachMap);
map_array.push(emptyMap);
var currentMapName = "";

function init() {
	stage = new createjs.Stage("demoCanvas"); //stage object 
	var image = new Image();				 // image object for background 
	image.src = "./assets/background.png";	  // image source 
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	stage.addChild(container);				// not sure waht addChild is ? 
	bmp.x = -800;
	bmp.y = 0;
	
	var image_1 = new Image();
	image_1.src = "./assets/background - Copy.png";
	bmp_1 = new createjs.Bitmap(image_1);
	container.addChild(bmp_1);
	bmp_1.x = -800;
	bmp_1.y = 0;
	
	container.addChild(bmp);
	//Show point counter [NOT WORKING, FIX]
	var point_text = createText("Points: "+ points, 0, 700, "16px Arial", "#ff0000");
	stage.addChild(point_text);
	
	//Adding player	
	player = new Player(400, 235, 2, "./assets/Character.png", 40, 135, "player");
	stage.addChild(player);
	
	//Adding clues
 	clue1 = new Clue(500, 500, 1, "./assets/wallet.png", 24,24);
 	stage.addChild(clue1);
 	clue2 = new Clue(700, 500, 1, "./assets/photo.png", 24,24);
 	stage.addChild(clue2);
 	clue3 = new Clue(600, 500, 1, "./assets/drugs.png", 24,24);
 	stage.addChild(clue3);


	//Adding Cop (NPC object instance)
	cop = new NPC(100, 235, 1, "./assets/Copper.png", 35, 135, "cop_beach");
	stage.addChild(cop);
	
	//Adding guy1
	guy1 = new NPC(-530, 200, 1, "./assets/guy1.png", 170, 169, "guy1"); 
	stage.addChild (guy1);
	
	//Adding guy2
	guy2 = new NPC(100, 450, 1, "./assets/guy2.png",56,141, "guy2");
	stage.addChild(guy2);
	
	//Adding Petey (NPC object instance)
	petey = new NPC(100, 235, 1, "./assets/petey.png", 170, 47, "petey");
	stage.addChild(petey);
	
	
	//Create ticker (game loop)
	createjs.Ticker.on("tick", game_loop);
}


function game_loop(event) {
	update();
	draw();
}


function update(){
	createInventory();
	player.update();
	
	//Stick Clues, unstick once found
	for(var i = 0; i<clues.length; i++){
		the_clue = clues[i];
		if(!the_clue.discovered){
			stickToBackground(the_clue, the_clue.back.x, the_clue.back.y);
		}
	}
	
	stickToBackground(cop, cop.back.x, cop.back.y);
	stickToBackground(petey, 2000, 450);
	stickToBackground(guy1, guy1.back.x, guy1.back.y);
	stickToBackground(guy2, guy2.back.x, guy2.back.y);
	
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


			