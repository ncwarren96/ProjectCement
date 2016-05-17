var keys = new Array();

var stage, circle, rect, bmp, cop, clue, petey, inventory;
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
	
	var graphics = new createjs.Graphics().beginFill("Red").drawRect(0, 0, 10, 10);
	clue = new createjs.Shape(graphics);
	clue.x = 0;
	clue.y = 0;
 	stage.addChild(clue);
 	
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
	player.addEventListener("click", handleClick_player);
	 function handleClick_player(event) {
	    console.log("player clicked.");
	 }
	stage.addChild(player);
		
	var copData = new createjs.SpriteSheet({	// cop sprite 
		images: ["./assets/Copper.png"],		// image source for cop 
		frames: {width: 35, height: 135, count:1},
	});
	cop = new createjs.Sprite(copData);
	cop.x = 100;
	cop.y = 235;
	cop.addEventListener("click", handleClick_cop);
	function handleClick_cop(event) {
	    console.log("cop clicked.");
	    if(getDistance(cop.x, cop.y, player.x, player.y) < 100){
	    	showDialogue("cop_beach", 0);
	    }
	 }
	stage.addChild(cop);
	
	/*
	// I'm trying to display petey's image, not sure why its not working?? 
	var peteyData = new createjs.SpriteSheet({		//petey sprite
		images: ["./assets/petey.png"],				// image 
		frames: {width: 35, height: 135, count:1},
	});
	petey = new createjs.Sprite(peteyData);		
	petey.x = 100;
	petey.y = 235;
	stage.addChild(petey);
	*/
	
	createjs.Ticker.on("tick", game_loop);
}


function game_loop(event) {
	update();
	draw();
}


function update(){
	createInventory();
	move(player);
	stickToBackground(cop, 1182, 235);	// draw the sprites on the screen. 
	stickToBackground(clue, 1300, 500);
	//stickToBackground(petey, 1182, 350);
	//clueCollision(clue);
	//console.log("x: " + stage.mouseX + " y: " + stage.mouseY);
	//var pt = player.localToLocal(bmp.x, bmp.y);
	//console.log("px:"+ pt.x + " py:"+ pt.y);
	//addCollisionCircle(clue);
}

function draw(event){
	stage.update(event);
}


//*********************************Helper Functions*************************

function getDistance(x, y, x2, y2){
	return Math.sqrt(Math.pow((y2 - y), 2) + Math.pow((x2 - x), 2));
}

			


			