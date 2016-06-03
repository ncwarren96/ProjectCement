var keys = new Array();
var stage, player, circle, rect, bmp, bmp_1, cop, clue, boyce, petey, guy1, guy2, barrel, inventory, points_text, exit;
var secretClue1, secretClue2, secretClue3, secretClue4;
var stageClickCount = 0;

var points = 0;
var secretPoints = 0;

var clues = [];
var found_clues = [];
var map_array = [];

inventory = new createjs.Container();

var barberDeathEvent = false;

var beachMap = new map("beach");
var startMap = new map("start");
var cityMap = new map("city");
var barberMap = new map("barber"); //barber
var nypdMap = new map("nypd"); // nypdMap
map_array.push(beachMap);
map_array.push(startMap);
map_array.push(cityMap);
map_array.push(barberMap);
map_array.push(nypdMap);
var currentMapName = "start";
var startMapCounter = 0;
var startMapText;

function init() {
	stage = new createjs.Stage("demoCanvas"); //stage object 
	
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
	stage.enableMouseOver(20); 
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
 	drugs.clueInfo = makeInfoSprite("./assets/drugs_info.png");
 	beachMap.map_Objects.push(drugs);
 	
 	peteyClue = new Clue(400, -30, 1, "./assets/photo.png", 24, 24, "petey");
	peteyClue.clueInfo = makeInfoSprite("./assets/petey_info.png");
	beachMap.map_Objects.push(peteyClue);
	
	secretClue1 = new Clue(-1000, 500, 1, "./assets/secret.png", 24, 24, "M");
 	secretClue1.clueInfo = makeInfoSprite("./assets/secret_info.png");
 	secretClue1.secret = true;
	beachMap.map_Objects.push(secretClue1);
	
	//Adding Cop (NPC object instance)
	cop = new NPC(-200, 235, 1, "./assets/Copper.png", 35, 135, "cop_beach");
	beachMap.map_Objects.push(cop);
	
	//Robert Boyce
	boyce = new NPC(250, 300, 1, "./assets/boyce_sprite.png", 40, 135, "boyce");
	beachMap.map_Objects.push(boyce);
	
	//Adding guy1
	guy1 = new NPC(-1300, 200, 1, "./assets/guy1.png", 170, 169, "guy2");
	beachMap.map_Objects.push(guy1);
		
	//Adding Petey (NPC object instance)
	petey = new NPC(400, 450, 1, "./assets/petey.png", 170, 47, "petey");
	beachMap.map_Objects.push(petey);
	
	beachMap.map_Objects.push(inventory);
	beachMap.map_Objects.push(player);

	beachMap.map_Objects.push(exit);
	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		beachMap.map_Objects.push(clues[i].clueInfo);
	}

	/**************************************CITY MAP*********************************/
	
	cityMap.map_Objects.push(container);
	cityMap.map_Objects.push(inventory);
	cityMap.map_Objects.push(player);

	//burningBarrel
	barrel = new NPC(-350, 310, 1, "./assets/burningBarrel.png",88, 119, "barrel");
	cityMap.map_Objects.push(barrel);
	
	//Adding creep guy
	guy2 = new NPC(400, 450, 1, "./assets/guy2.png",56,141, "creep");
	cityMap.map_Objects.push(guy2);
	
	//Adding phone booth
	phone = new NPC(50, 275, 1, "./assets/PhoneBooth.png", 72, 150, "phone");
	cityMap.map_Objects.push(phone);
	
	//receiptSprite // having problem with puting clue info on screen 
	receipt = new Clue(-600, 450, 1, "./assets/receiptSprite.png", 20,32, "receipt");
 	receipt.clueInfo = makeInfoSprite("./assets/Receipt.png");
 	cityMap.map_Objects.push(receipt);
	
	//Secret Clues
 	secretClue2 = new Clue(0, 500, 1, "./assets/secret2.png", 24, 24, "A");
 	secretClue2.clueInfo = makeInfoSprite("./assets/secret2_info.png");
 	secretClue2.secret = true;
 	cityMap.map_Objects.push(secretClue2);
	
	secretClue5 = new Clue(-300, 500, 1, "./assets/secret5.png", 24, 24, "D");
 	secretClue5.clueInfo = makeInfoSprite("./assets/secret5_info.png");
	secretClue5.secret = true;
	cityMap.map_Objects.push(secretClue5);
	
	//add clue infos
	for(var i = 0; i<clues.length; i++){
		cityMap.map_Objects.push(clues[i].clueInfo);
	}
	


	/**************************************Barber MAP*********************************/
	barberMap.map_Objects.push(container);
	barberMap.map_Objects.push(inventory);
	barberMap.map_Objects.push(player);
	
	barber = new NPC(75, 100, 1, "./assets/barber.png", 28, 130, "barber");
	barberMap.map_Objects.push(barber);
	
	haircut = new NPC(500, 500, 1, "./assets/guy3.png", 60, 160, "haircut");
	barberMap.map_Objects.push(haircut);
	
	secretClue3 = new Clue(200, 200, 1, "./assets/secret3.png", 24, 24, "N");
 	secretClue3.clueInfo = makeInfoSprite("./assets/secret3_info.png");
 	secretClue3.secret = true;
 	barberMap.map_Objects.push(secretClue3);
 	
 	secretClue4 = new Clue(200, 300, 1, "./assets/secret4.png", 24, 24, "D");
 	secretClue4.clueInfo = makeInfoSprite("./assets/secret4_info.png");
	secretClue4.secret = true;
	barberMap.map_Objects.push(secretClue4);
	
	//add clueInfos
	for(var i = 0; i<clues.length; i++){
		barberMap.map_Objects.push(clues[i].clueInfo);
	}

	/**************************************nypd MAP*********************************/
	nypdMap.map_Objects.push(container);
	nypdMap.map_Objects.push(inventory);
	nypdMap.map_Objects.push(player);
	
	//Add deskCop
	deskCop = new NPC(385, 160, 1, "./assets/deskCop.png", 55, 59, "deskCop");
	nypdMap.map_Objects.push(deskCop);
	
	
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
		
	}
	/**************************************City MAP [update]*********************************/
	if(currentMapName == "city"){
		moveInventory();
		player.update();
		
		guy2.stickNPCtoBack();
		phone.stickNPCtoBack();
		barrel.stickNPCtoBack();
		
		for(var i = 0; i<clues.length; i++){
			the_clue = clues[i];
			if(!the_clue.discovered){
				the_clue.stickClueToBack();
			}
		}
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
		
		point_text.text = "Points: "+ points;
	
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

			