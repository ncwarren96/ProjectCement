(function(){
	function Player(x, y, numframes, url, width, height){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.x = x;
		this.y = y;
		
		this.back = getBackgroundPosition(x, y);
	}
	var p = createjs.extend(Player, createjs.Sprite);
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};
	
	
	
	window.Player = createjs.promote(Player, "Sprite");
}());

//NPC Object definition
(function(){
	function NPC(x, y, numframes, url, width, height){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.x = x;
		this.y = y;
		
		this.back = getBackgroundPosition(x, y);
		this.addEventListener("click", handleClick_cop);
	}
	var p = createjs.extend(NPC, createjs.Sprite);
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};
	
	window.NPC = createjs.promote(NPC, "Sprite");
}());

//Clue Object definition
(function(){
	function Clue(x, y, numframes, url, width, height){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.x = x;
		this.y = y;
		
		this.clueInfo = null;
		
		this.addEventListener("click", handleClick_clue);
		this.back = getBackgroundPosition(x, y);
	}
	var p = createjs.extend(Clue, createjs.Sprite);
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};
	
	p.showInfo = function(clue){
		
	};
	
	
	window.Clue = createjs.promote(Clue, "Sprite");
}());

		
function handleClick_clue(event){
	console.log("clicked on clue");
	var dist = getDistance(player.x, player.y, clue.x, clue.y);
	if(dist < 135){
		console.log("yes");
		stage.removeChild(clue1);
		points ++;
	}
}	

function handleClick_cop(event) {
	console.log("cop clicked.");
	if(getDistance(cop.x, cop.y, player.x, player.y) < 100){
	  	showDialogue("cop_beach", 0);
	}
}