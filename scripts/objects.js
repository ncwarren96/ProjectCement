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
	function NPC(x, y, numframes, url, width, height, label){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.label = label;
		
		this.x = x;
		this.y = y;
		
		this.back = getBackgroundPosition(x, y);
		this.on("click", p.handleClick_NPC);
	}
	var p = createjs.extend(NPC, createjs.Sprite);
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};
	
	p.handleClick_NPC = function(event){
		if(getDistance(this.x, this.y, player.x, player.y) < 100){
			showDialogue(this.label, 0);
			console.log(this.label+" clicked");
		}
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
		
		this.on("click", p.handleClick_clue);
		this.back = getBackgroundPosition(x, y);
	}
	var p = createjs.extend(Clue, createjs.Sprite);
	
	p.makeSheet = function(url, numframes, width, height){
		return new createjs.SpriteSheet({
			images: [url],
			frames: {width: width, height: height, count: numframes}
		});
	};

	p.handleClick_clue = function(event){
		if(getDistance(player.x, player.y, this.x, this.y) < 135){
			console.log("clue picked up");
			stage.removeChild(this);
			points++;
		}
	};

	p.showInfo = function(clue){
		
	};
	
	
	window.Clue = createjs.promote(Clue, "Sprite");
}());
*/