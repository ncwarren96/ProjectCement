var keys = new Array();
var stage, player, circle, rect, bmp, bmp_1, cop, clue, boyce, petey, guy1, guy2, barrel, inventory, points_text, exit;
var secretClue1, secretClue2, secretClue3, secretClue4;
var stageClickCount = 0;

var points = 0;
var secretPoints = 0;

var clues = [];
var secrets = [];
var found_clues = [];
var map_array = [];

inventory = new createjs.Container();

var barberDeathEvent = false;

var beachMap = new map("beach");
var startMap = new map("start");
var cityMap = new map("city");
var barberMap = new map("barber"); //barber
var barberMap2 = new map("barber2"); //barber death map
var nypdMap = new map("nypd"); // nypdMap
map_array.push(beachMap);
map_array.push(startMap);
map_array.push(cityMap);
map_array.push(barberMap);
map_array.push(barberMap2);
map_array.push(nypdMap);
var currentMapName = "start";
var startMapCounter = 0;
var startMapText;


function init() {
	createjs.Sound.registerSound("./sounds/click.mp3", "clickSound");
	createjs.Sound.registerSound("./sounds/boop.mp3", "boopSound");
	
	stage = new createjs.Stage("demoCanvas"); 	//stage object
	stage.enableMouseOver(20); 					//allow mouseover and mouseout events to stage
	
	stage.on("click", stageClick);
	createInventory();
	
	exit = new createjs.Shape();
	exit.graphics.beginFill("red").drawRect(600, 200, 20, 20);
	exit.visible = false;
	
	
	//Create ticker (game loop)
	createjs.Ticker.on("tick", game_loop);
	
	/************************************START MAP*******************************/
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 800, 600);
	stage.addChild(bg_rect);

	bg_rect.on("click", handleClick_bg, null,false);
	function handleClick_bg(evt) {
		startMapCounter++;
		if(startMapCounter == 1){
			startMapText.y = 225;
			startMapText.text = "Out of request for the survivors,\n"+ 
								"the names have been changed.\n \n"+
								"Out of request for the dead,\n"+
								"the rest has been told exactly\n"+
								"as it occurred.";
		}else if(startMapCounter == 2){
			startMapText.y = 275;
			startMapText.text = "\"It was old school...\n"+
								" we are treating it as a homicide\"\n \n"+
								"            - NYPD Chief of Detectives,\n"+
								"              Rodger Boyd";
		}else if(startMapCounter == 3){
			loadMap("start", "beach", "./assets/background.png", "./assets/background - Copy.png");
			showDialogue("intro", 0);
		}

    }

	

	startMapText = new createjs.Text("On May 3rd, 2016, a body washed ashore\n"+
							 		"in Sheepshead Bay, Brooklyn.\n \n"+
							 		"The body was disposed with the feet set in\n"+ 
							 		"a bucket of cement, and body taped in bags", 
							 		"20px Courier", "#FFFFFF");
	startMapText.x = 150;
	startMapText.y = 250;
	startMapText.textAlign = "left";
	startMapText.lineHeight = 25;
	startMapText.textBaseline = "alphabetic";
	var hit = new createjs.Shape();	
	hit.graphics.beginFill("#000").drawRect(0, 0, 1, 1);
	startMapText.hitArea = hit;
	stage.addChild(startMapText);

	/**********************************BEACH MAP*******************************/

	var image = new Image();				  // image object for background 
	image.src = "./assets/background.png";	  // image source 
	bmp = new createjs.Bitmap(image);
	var container = new createjs.Container();
	beachMap.map_Objects.push(container);
	bmp.x = -1600;
	bmp.y = 0;
	
	var image_1 = new Image();
	image_1.src = "./assets/background - Copy.png";
	bmp_1 = new createjs.Bitmap(image_1);
	//container.addChild(bmp_1);
	bmp_1.x = -1600;
	bmp_1.y = 0;
	
	container.addChild(bmp);
	
	//Show point counter
	point_text = new createjs.Text("Points: "+ points, "16px Arial", "#FF0000");
	point_text.x = 700;
	point_text.y = 10;
	beachMap.map_Objects.push(point_text);
	
	
	//Adding player	
	player = new Player(300, 320, 2, "./assets/Character.png", 40, 135, "player");
	
	//Adding  beach clues
 	wallet = new Clue(400, 550, 1, "./assets/wallet.png", 24,24, "wallet");
 	wallet.clueInfo = makeInfoSprite("./assets/wallet_info.png");
 	beachMap.map_Objects.push(wallet);
 		
 	drugs = new Clue(150, 500, 1, "./assets/drugs.png", 24,24, "drugs");
 	drugs.clueInfo = makeInfoSprite("./assets/Drugs_info.png");
 	beachMap.map_Objects.push(drugs);
 	
 	peteyClue = new Clue(400, -30, 1, "./assets/photo.png", 24, 24, "petey");
	peteyClue.clueInfo = makeInfoSprite("./assets/petey_info.png");
	beachMap.map_Objects.push(peteyClue);
	
	secretClue1 = new Clue(-1000, -30, 1, "./assets/secret.png", 24, 24, "M");
 	secretClue1.clueInfo = makeInfoSprite("./assets/secret_info.png");
 	secretClue1.secret = true;
	beachMap.map_Objects.push(secretClue1);
	
	//Burning Barrel (which contains secretClue1)
	barrel = new NPC(-800, 310, 1, "./assets/burningBarrel.png",88, 119, "barrel");
	beachMap.map_Objects.push(barrel);
	
	//Adding Cop (NPC object instance)
	cop = new NPC(-200, 235, 1, "./assets/Copper.png", 35, 135, "cop_beach");
	beachMap.map_Objects.push(cop);
	
	//Robert Boyce
	boyce = new NPC(250, 300, 1, "./assets/boyce_sprite.png", 40, 135, "boyce");
	beachMap.map_Objects.push(boyce);
	boyce.questions = false;
	console.log(boyce.questions);
	
	//Adding guy1
	guy1 = new NPC(-1300, 200, 1, "./assets/guy1.png", 170, 169, "guy2");
	beachMap.map_Objects.push(guy1);
		
	//Adding Petey (NPC object instance)
	petey = new NPC(400, 450, 1, "./assets/petey.png", 170, 47, "petey");
	beachMap.map_Objects.push(petey);
	
	beachMap.map_Objects.push(inventory);
	beachMap.map_Objects.push(player);

	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		beachMap.map_Objects.push(clues[i].clueInfo);
	}

	/**************************************CITY MAP*********************************/
	
	cityMap.map_Objects.push(container);

	//Adding creep guy
	guy2 = new NPC(400, 450, 1, "./assets/guy2.png",56,141, "creep");
	cityMap.map_Objects.push(guy2);
	
	//Adding phone booth
	phone = new NPC(50, 275, 1, "./assets/PhoneBooth.png", 72, 150, "phone");
	cityMap.map_Objects.push(phone);
	
	//phone booth contains secretClue2
 	secretClue2 = new Clue(0, -30, 1, "./assets/secret2.png", 24, 24, "A");
 	secretClue2.clueInfo = makeInfoSprite("./assets/secret2_info.png");
 	secretClue2.secret = true;
 	cityMap.map_Objects.push(secretClue2);
 	
 	//Secret clues
 	secretClue3 = new Clue(-200, 500, 1, "./assets/secret3.png", 24, 24, "N");
 	secretClue3.clueInfo = makeInfoSprite("./assets/secret3_info.png");
 	secretClue3.secret = true;
 	cityMap.map_Objects.push(secretClue3);
 
	secretClue5 = new Clue(-300, 500, 1, "./assets/secret5.png", 24, 24, "D");
 	secretClue5.clueInfo = makeInfoSprite("./assets/secret5_info.png");
	secretClue5.secret = true;
	cityMap.map_Objects.push(secretClue5);

	cityMap.map_Objects.push(inventory);
	cityMap.map_Objects.push(player);
	
	//add clue infos
	for(var i = 0; i<clues.length; i++){
		cityMap.map_Objects.push(clues[i].clueInfo);
	}
	


	/**************************************Barber MAP*********************************/
	barberMap.map_Objects.push(container);
	
	
	barber = new NPC(400, 150, 1, "./assets/barber.png", 40, 130, "barber");
	barberMap.map_Objects.push(barber);
	
	haircut = new NPC(500, 500, 1, "./assets/guy3.png", 60, 160, "haircut");
	barberMap.map_Objects.push(haircut);
	


 	barberMap.map_Objects.push(inventory);
	barberMap.map_Objects.push(player);
 	
	
	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		barberMap.map_Objects.push(clues[i].clueInfo);
	}
	
	/**************************************Barber2 MAP*********************************/
	barberMap2.map_Objects.push(container);
	
	barberDead = new NPC(400, 250, 1, "./assets/barberDead.png", 132, 42, "barberDead");
	barberMap2.map_Objects.push(barberDead);
	
	secretClue3 = new Clue(-1200, 300, 1, "./assets/secret3.png", 24, 24, "N");
 	secretClue3.clueInfo = makeInfoSprite("./assets/secret3_info.png");	
 	secretClue3.secret = true;
 	barberMap2.map_Objects.push(secretClue3);
 	
 	//receiptSprite
	receipt = new Clue(-1200, 400, 1, "./assets/receiptSprite.png", 20,32, "receipt");
 	receipt.clueInfo = makeInfoSprite("./assets/Receipt.png");
 	barberMap2.map_Objects.push(receipt);

	barberMap2.map_Objects.push(inventory);
	barberMap2.map_Objects.push(player);
	
		//add clueInfos
	for(var i = 0; i<clues.length; i++){
		barberMap2.map_Objects.push(clues[i].clueInfo);
	}
	
	/**************************************nypd MAP*********************************/
	nypdMap.map_Objects.push(container);
	
	
	//Add deskCop
	deskCop = new NPC(385, 160, 1, "./assets/deskCop.png", 55, 59, "deskCop");
	nypdMap.map_Objects.push(deskCop);
	
	secretClue3 = new Clue(200, 200, 1, "./assets/secret3.png", 24, 24, "N");
 	secretClue3.clueInfo = makeInfoSprite("./assets/secret3_info.png");
 	secretClue3.secret = true;
 	nypdMap.map_Objects.push(secretClue3);

 	nypdMap.map_Objects.push(inventory);
	nypdMap.map_Objects.push(player);
	
	
	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		nypdMap.map_Objects.push(clues[i].clueInfo);
	}
}

function game_loop(event) {
	update();
	draw();
}


function update(){
	/**************************************Beach MAP [update]*********************************/
	if(currentMapName == "beach"){
		moveInventory();
		player.update();
		
		//Stick Clues, unstick once found
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
		point_text.text = "Points: "+ points;
		cop.stickNPCtoBack();
		boyce.stickNPCtoBack();
		petey.stickNPCtoBack();
		guy1.stickNPCtoBack();
		barrel.stickNPCtoBack();
		
	}
	/**************************************City MAP [update]*********************************/
	if(currentMapName == "city"){
		moveInventory();
		player.update();
	
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
		
		guy2.stickNPCtoBack();
		phone.stickNPCtoBack();
	}
	
	/**************************************Barber MAP [update]*********************************/
	if(currentMapName == "barber"){
		moveInventory();
		player.update();
		
		
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
		console.log(clues[0].x);
		//point_text.text = "Points: "+ points;
	
	}
	
	if(currentMapName == "barber2"){
		moveInventory();
		player.update();
		
		
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
	}
	/**************************************NYPD MAP [update]*********************************/
	if(currentMapName == "nypd"){
		moveInventory();
		player.update();
		
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
		point_text.text = "Points: "+ points;
	
	}
	
	
	//Display background mouse position in console
	var mouse = getBackgroundPosition(stage.mouseX, stage.mouseY);
	//console.log("x: " + mouse.x + " y: " + mouse.y);

}

function draw(event){
	stage.update(event);
}


//*********************************Helper Functions*************************

//returns distance between the point (x, y) and (x2, y2)
function getDistance(x, y, x2, y2){
	return Math.sqrt(Math.pow((y2 - y), 2) + Math.pow((x2 - x), 2));
}
//returns the position (x, y) on the canvas relative to the origin of the background image
function getBackgroundPosition(x, y){
	var backX = bmp.x*(-1)+x;
	var backY = y;
	var back = {
		x: backX,
		y: backY
	};
	return back;
}
//????
function stageClick(){
	console.log("clicked");
	for(var i = 0; i<clues.length; i++){
		the_clue = clues[i];
		if(the_clue.clueInfo.visible){
			stageClickCount++;
			console.log(stageClickCount);
			if(stageClickCount == 2){ 
				the_clue.clueInfo.visible = false; 
				stageClickCount = 0;
				player.immobile = false;
				}
		}
	}
}

			