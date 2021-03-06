(function(){
	//constructor for new Player class
	function Player(x, y, numframes, url, width, height){
		this.spriteSheet = makeSheet(url, numframes, width, height);	//create new spritesheet
		this.Sprite_constructor(this.spriteSheet);						//existing sprite constructor
		
		this.setup(x, y, width, height);								//load all properties in the constructor
	}
	var p = createjs.extend(Player, createjs.Sprite);					//Declare that Player extends Sprite
	
	//function for loading properties of the player
	p.setup = function(x, y, width, height){
		this.x = x;									//x-position
		this.y = y;									//y-position
		this.width = width;							//width
		this.height = height;						//height
		this.back = getBackgroundPosition(x, y);	//position on the background
		this.objInFront = new Array();				//array of objects in front of the player
		this.immobile = false;
		
	};
	
	//update for player
	p.update = function(){
		p.movePlayer(this);
		p.checkInFront(this);
	};
	
	//move function for player
	p.movePlayer = function(sprite){
		if(sprite.immobile){
			return;
		}
		var KEYCODE_W = 87;
		var KEYCODE_A = 65;
		var KEYCODE_S = 83;
		var KEYCODE_D = 68;
		
		var pt = sprite.localToGlobal(0, 0);
		var gWidth = stage.canvas.width;
		var gHeight = stage.canvas.height;
		var sheet = sprite.spriteSheet;
		var sWidth = sheet._frameWidth;
		var sHeight = sheet._frameHeight;
		var moveAmount = 10;
		
		var tempSpriteX = tempSpriteY = tempBackX = 0;
		
		var backPoint = getBackgroundPosition(sprite.x, sprite.y);
		//console.log("backPointx: " + backPoint.x + " backPoint.y: " + backPoint.y);

		if(sprite.x == 0){
			console.log("left collision");
			if(currentMapName == "beach"){
				loadMap("beach", "city", "./assets/Background1.png", "./assets/Background1-hitbox.png");
				BeachMusic.reset();
				oceanSound.reset();
				CityMusic.play();
				bmp.x = -1600;
				player.x = 750;
				player.y = 400;
				bmp_1.x = -1600;
				return;
			}
			
		
		}else if(sprite.x == 760){
			if(currentMapName == "city"){
				loadMap("city", "beach", "./assets/background.png", "./assets/background - Copy.png");
				CityMusic.reset();
				BeachMusic.play();
				oceanSound.play();
				bmp.x = 0;
				player.x = 10;
				bmp_1.x = 0;
				return;
			}
			
		}

		if(currentMapName == "city"){
			if(backPoint.x > 2040 && backPoint.x < 2090 && backPoint.y <= 275 && barberDeathEvent == false){
				loadMap("city", "barber", "./assets/barbershop.png", "./assets/testRoom-hitbox.png");
				CityMusic.reset();
				BarberMusic.play();
				bmp.x = 0;
				bmp_1.x = 0;
				player.x = 300;
				player.y = 464;
				return;
				
			}else if(backPoint.x > 2040 && backPoint.x < 2090 && backPoint.y <= 275 && barberDeathEvent == true){
				loadMap("city", "barber2", "./assets/barbershop.png", "./assets/testRoom-hitbox.png");
				CityMusic.reset();
				BarberMusic.play();
				bmp.x = 0;
				bmp_1.x = 0;
				player.x = 300;
				player.y = 464;
				return;
			}

			if(backPoint.x > 740 && backPoint.x < 790 && backPoint.y <= 275){
				loadMap("city", "nypd", "./assets/NYPD.png", "./assets/testRoom-hitbox.png");
				CityMusic.reset();
				bmp.x = 0;
				bmp_1.x = 0;
				player.x = 300;
				player.y = 464;
				return;
			}
		}

		if(currentMapName == "barber"){
			if(backPoint.x > 240 && backPoint.x < 290 && backPoint.y >= 465){
				loadMap("barber", "city", "./assets/Background1.png", "./assets/Background1-hitbox.png");
				BarberMusic.reset();
				if(barberDeathEvent){
					gunSound.play();
					showDialogue("gunshot", 0);
				}
				CityMusic.play();
				bmp.x = -1600;
				bmp_1.x = -1600;
				player.x = 430;
				player.y = 290;
				return;
			}
		}
		
		if(currentMapName == "barber2"){
			if(backPoint.x > 240 && backPoint.x < 290 && backPoint.y >= 465){
				loadMap("barber", "city", "./assets/Background1.png", "./assets/Background1-hitbox.png");
				BarberMusic.reset();
				CityMusic.play();
				bmp.x = -1600;
				bmp_1.x = -1600;
				player.x = 400;
				player.y = 290;
				return;
			}
		}

		if(currentMapName == "nypd"){
			if(backPoint.x > 240 && backPoint.x < 290 && backPoint.y >= 465){
				if(endGameScenario){
					loadMap("nypd", "city2", "./assets/Background1.png", "./assets/Background1-hitbox.png");
					CityMusic.play();
					bmp.x = -300;
					bmp_1.x = -300;
					player.x = 400;
					player.y = 290;
					showDialogue("end", 0);
					return;
				}else{
					loadMap("nypd", "city", "./assets/Background1.png", "./assets/Background1-hitbox.png");
					CityMusic.play();
					bmp.x = -300;
					bmp_1.x = -300;
					player.x = 400;
					player.y = 290;
					return;
				}
				
			}
		}

		
		//Directional Movement
		//Left
		if(keys[KEYCODE_A] === true && sprite.x > 0){
			if(sprite.currentFrame != 1){
				sprite.advance();
			}
			if(pt.x > 200 || bmp.x >= 0){
				tempSpriteX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+tempSpriteX, backPoint.y+135+tempSpriteY)){
					console.log("bmp_1 hit test is true");
					tempSpriteX = 0;
				}
			}else{
				sprite.x = 200;
				tempBackX += moveAmount;
				if(bmp_1.hitTest(backPoint.x+tempSpriteX, backPoint.y+135+tempSpriteY)){
					console.log("bmp_1 hit test is true");
					tempBackX = 0;
				}
			}
		}
		//Right
		if(keys[KEYCODE_D] === true && sprite.x < gWidth-sWidth){
			if(sprite.currentFrame != 0){
				sprite.advance();
			}
			if(pt.x < gWidth-200-sWidth || bmp.x+1600 <= 0){
				tempSpriteX += moveAmount;
				if(bmp_1.hitTest(backPoint.x+sprite.width+tempSpriteX, backPoint.y+135+tempSpriteY)){
					console.log("bmp_1 hit test is true");
					tempSpriteX = 0;
				}else if(backPoint.y+135 === gHeight){
					if(bmp_1.hitTest(backPoint.x+sprite.width+tempSpriteX, backPoint.y+134+tempSpriteY)){
						tempSpriteX = 0;
					}
				}
			}else{
				sprite.x = gWidth-200-sWidth;
				tempBackX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					console.log("bmp_1 hit test is true");
					tempBackX = 0;
				}else if(backPoint.y+135 >= gHeight){
					if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+134+tempSpriteY)){
						tempBackX = 0;
					}
				}
			}
		}
		
		//Up
		if(keys[KEYCODE_W] === true){
			tempSpriteY -= moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				console.log("bmp_1 hit test is true");
				tempSpriteY = 0;
			}
		}
		//Down
		if(keys[KEYCODE_S] === true && sprite.y < gHeight-sHeight){
			tempSpriteY += moveAmount;
			if(sprite.y+tempSpriteY+135 > 600){
				tempSpriteY = 0;
				sprite.y = 465;
			}
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
				console.log("bmp_1 hit test is true");
				tempSpriteY = 0;
				console.log("in here");
			}
		}
		
		sprite.x += tempSpriteX;
		sprite.y += tempSpriteY;
		bmp.x += tempBackX;
		bmp_1.x += tempBackX;
	};
	
	//function to move sprites in front of player
	p.checkInFront = function(sprite){
		for(var i = 2; i < stage.numChildren; i++){
			var playerIndex = stage.getChildIndex(sprite);
			var child = stage.getChildAt(i);
			if(child === sprite){
				continue;
			}
			var index = sprite.objInFront.indexOf(child);
			var spriteBottom = sprite.y+sprite.height;
			var childBottom = child.y+child.height;
			var above = (spriteBottom < childBottom);
			if(index < 0 && above){
				sprite.objInFront.push(child);
				stage.setChildIndex(child, playerIndex);
			}else if(index >= 0 && !above){
				sprite.objInFront.splice(index, 1);
				stage.setChildIndex(child, playerIndex);
			}
			
		}
	};
	
	//gives all changed Sprite functions the prefix "Sprite_"
	window.Player = createjs.promote(Player, "Sprite");
}());

//NPC Object definition
(function(){
	//Constructor for NPC
	function NPC(x, y, numframes, url, width, height, label){
		this.spriteSheet = makeSheet(url, numframes, width, height);	//Create Spritesheet for NPC
		this.Sprite_constructor(this.spriteSheet);						//existing Sprite Constructor
		
		this.setup(x, y, width, height, label);							//load all properties of NPC
	}
	var p = createjs.extend(NPC, createjs.Sprite);						//Declare that NPC extends Sprite
	
	//Function for loading properties of the player
	p.setup = function(x, y, width, height, label){
		this.x = x;									//x-position
		this.y = y;									//y-position
		this.width = width;							//width
		this.height = height;						//height
		this.label = label;							//label for this instance
		
		this.back = getBackgroundPosition(x, y);	//position on the background
		this.on("click", p.handleClick_NPC);   		//event handler for clicking NPC's
	};
	
	//function for handling clicks
	p.handleClick_NPC = function(event){
		console.log(player.immobile);
		if(player.immobile){
			return;
		}
		if(getDistance(this.x, this.y, player.x, player.y) < 200){
			showDialogue(this.label, 0);			//run the dialouge script
		}
	};
	
	//function for sticking an NPC to the background
	p.stickNPCtoBack = function(){
		var pt = bmp.localToGlobal(this.back.x, this.back.y);
		this.x = pt.x;
		this.y = pt.y;
	};
	
	window.NPC = createjs.promote(NPC, "Sprite");	//gives all changed Sprite functions the prefix "Sprite_"
}());

//Clue Object definition
(function(){
	//Clue constructor
	function Clue(x, y, numframes, url, width, height, label){
		this.spriteSheet = makeSheet(url, numframes, width, height);	//create new spriteSheet for the clue
		this.Sprite_constructor(this.spriteSheet);						//Existing sprite Constructor
		
		this.setup(x, y, width, height, label);							//Load all Clue Properties
	}
	var p = createjs.extend(Clue, createjs.Sprite);						//Declare that Clue extends Sprite class
	
	//function for loading all proterties
	p.setup = function(x, y, width, height, label){
		this.x = x;									//x-position
		this.y = y;									//y-position
		this.width = width;							//width
		this.height = height;						//height
		
		this.clueInfo = new createjs.Sprite();
		
		this.secret = false;
		this.secretNumber = 0;
		this.label = label;							//label
		this.discovered = false;					//has the clue been discovered
		this.on("click", this.handleClick);			//event handler for clicking
		this.on("mouseover", p.handleOver);
		this.on("mouseout", p.handleOut);
		//this.clueInfo.on("click", p.infoClick);
		this.back = getBackgroundPosition(x, y);	//the position on the background of the clue
		
		clues.push(this);							//push the clue onto the array of clues
		
		
		
	};
	
	//fucntion for displaying the information on the clue
	p.showInfo = function(clue){
		
	};
	
	//event handler for clue
	p.handleClick = function (event) {
		if(player.immobile){
			return;
		}
		clickSound.play();
		this.clueInfo.visible = true;    //show/hide clue info
		
		if(this.clueInfo.visible){
			player.immobile = true;
		}else{
			player.immobile = false;
		}
		
		if(!this.discovered){			//if the clue has not been discovered
			this.discovered = true; 	//change it to discovered
			addToInventory(this);		//add the clue to the inventory
			points+=1;
			console.log("points:" + points + "secrets:" + secretPoints);
		}
	};
	
	p.handleOver = function(){
		if(!this.clueInfo.visible){
			boopSound.play();
			this.alpha = .6;
		}
	};
	
	p.handleOut = function(){
		this.alpha = 1;
	};
	
	
	//function for sticking clue to the background
	p.stickClueToBack = function(){
		var pt = bmp.localToGlobal(this.back.x, this.back.y);
		this.x = pt.x;
		this.y = pt.y;
	};
	
	window.Clue = createjs.promote(Clue, "Sprite");	//Declare that all changed Sprite functions get the prefix "Sprite_"
}());

function AudioObj(src, loop, vol){
	this.audio = new Audio("./sounds/"+src);
	this.audio.volume = vol;
	
	if(loop){
		this.audio.addEventListener("ended", function(){
			this.currentTime = 0;
			this.play();
		}, false);
	}
	
	this.play = function(){
		this.audio.play();
	};
	
	this.reset = function(){
		this.audio.pause();
		this.audio.currentTime = 0;
	};
}

//helper functoin for creating spritesheets
function makeSheet(url, numframes, width, height){
	return new createjs.SpriteSheet({
		images: [url],
		frames: {width: width, height: height, count: numframes}
	});
}
function makeInfoSprite(url){
	var sheet = makeSheet(url, 1, 400, 300);
	var sprite = new createjs.Sprite(sheet, 1);
	sprite.x = 200;
	sprite.y = 200;
	sprite.visible = false;
	return sprite;
}
