var keys = new Array();
var stage, player, circle, rect, bmp, bmp_1, cop, clue, petey, guy1, guy2, inventory;
var points = 0;
var clues = [];
var found_clues = [];
var map_array = [];
inventory = new createjs.Container();

var beachMap = new map("beach");
var startMap = new map("start");
map_array.push(beachMap);
map_array.push(startMap);
var currentMapName = "beach";
var startMapCounter = 0;
var startMapText;

function init() {
	stage = new createjs.Stage("demoCanvas"); //stage object 
	var image = new Image();				 // image object for background 
	image.src = "./assets/background.png";	  // image source 
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	beachMap.map_Objects.push(container);
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
	beachMap.map_Objects.push(point_text);
	
	//Adding player	
	player = new Player(400, 235, 2, "./assets/Character.png", 40, 135, "player");
	
	//Adding clues
 	clue1 = new Clue(500, 500, 1, "./assets/wallet.png", 24,24, "wallet");
 	clue1.clueInfo = makeInfoSprite("./assets/clue_info_sprite.png", 400, 300);
 	beachMap.map_Objects.push(clue1);

 	
 	clue2 = new Clue(700, 500, 1, "./assets/photo.png", 24,24, "photo");
 	clue2.clueInfo = makeInfoSprite("./assets/clue_info_sprite.png", 400, 300);
 	beachMap.map_Objects.push(clue2);
 	
 	clue3 = new Clue(600, 500, 1, "./assets/drugs.png", 24,24, "drugs");
 	clue3.clueInfo = makeInfoSprite("./assets/clue_info_sprite.png", 400, 300);
 	beachMap.map_Objects.push(clue3);

 	

	//Adding Cop (NPC object instance)
	cop = new NPC(100, 235, 1, "./assets/Copper.png", 35, 135, "cop_beach");
	beachMap.map_Objects.push(cop);

	
	//Adding guy1
	guy1 = new NPC(-530, 200, 1, "./assets/guy1.png", 170, 169, "guy1");
	beachMap.map_Objects.push(guy1);
	
	//Adding guy2
	guy2 = new NPC(100, 450, 1, "./assets/guy2.png",56,141, "guy2");
	beachMap.map_Objects.push(guy2);
	
	//Adding Petey (NPC object instance)
	petey = new NPC(1200, 450, 1, "./assets/petey.png", 170, 47, "petey");
	beachMap.map_Objects.push(petey);

	beachMap.map_Objects.push(player);

	
	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		beachMap.map_Objects.push(clues[i].clueInfo);
	}

	//START MAP
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 800, 600);
	stage.addChild(bg_rect);

	bg_rect.on("click", handleClick_bg, null,false);
	function handleClick_bg(evt) {
		startMapCounter++;
		if(startMapCounter == 1){
			startMapText.text = "Out of request for the survivors,\n the names have been changed.\nOut of request for the dead, \nthe rest has been told exactly as it occurred.";
		}else if(startMapCounter == 2){
			startMapText.text = "It was old school...we are treating it as a homicide\n- NYPD Chief of Detectives, Robert Boyce";
		}else if(startMapCounter == 3){
			loadMap("start", "beach");
		}

    }

	

	startMapText = new createjs.Text("On May 3rd , 2016, a body washed ashore in Sheepshead Bay,\n Brooklyn. The body was disposed with the feet set in a bucket\n of cement,and body taped in bags", "20px Courier", "#FFFFFF");
	startMapText.x = 400;
	startMapText.y = 250;
	startMapText.textAlign = "center";
	startMapText.lineHeight = 50;
	startMapText.textBaseline = "alphabetic";
	stage.addChild(startMapText);
	

	//Create ticker (game loop)
	createjs.Ticker.on("tick", game_loop);
}


function game_loop(event) {
	update();
	draw();
}


function update(){
	if(currentMapName == "beach"){
		createInventory();
		player.update();
		
		//Stick Clues, unstick once found
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
		
		cop.stickNPCtoBack();
		petey.stickNPCtoBack();
		guy1.stickNPCtoBack();
		guy2.stickNPCtoBack();
	}

	if(currentMapName == "start"){

	}
	
	
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


			