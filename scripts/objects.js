(function(){
	function Player(x, y, numframes, url, width, height){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.x = x;
		this.y = y;
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
		
		this.Sprite_constructor(this.spriteSheet);
		
		this.setup(x, y, numframes, url, width, height);
		
	}
	var p = createjs.extend(Clue, createjs.Sprite);
	
	p.setup = function(x, y, numframes, url, width, height){
		this.x = x;
		this.y = y;
		
		this.clueInfo = null;
		
		this.addEventListener("click", this.handleClick);
		
		this.back = getBackgroundPosition(x, y);
		
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
	};
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};
	p.showInfo = function(clue){
		
	};
	
	p.handleClick = function (event) {
		console.log(this.back.x);
		//this.y +=100;
	} ;
	
	window.Clue = createjs.promote(Clue, "Sprite");
}());