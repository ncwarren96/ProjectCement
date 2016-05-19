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
	
	p.update = function(){
		p.movePlayer(this);
		
	};
	
	p.movePlayer = function(sprite){
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
		
		//Directional Movement
		//Left
		if(keys[KEYCODE_A] === true && sprite.x > 0){
			if(sprite.currentFrame != 1){
				sprite.advance();
			}
			if(pt.x > 200 || bmp.x >= 0){
				tempSpriteX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteX = 0;
				}
			}else{
				sprite.x = 200;
				tempBackX = moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteX = 0;
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
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteX = 0;
				}else if(backPoint.y+135 === gHeight){
					if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+134+tempSpriteY)){
						tempSpriteX = 0;
					}
				}
			}else{
				sprite.x = gWidth-200-sWidth;
				tempBackX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
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
				tempSpriteY = 0;
			}
		}
		//Down
		if(keys[KEYCODE_S] === true && sprite.y < gHeight-sHeight){
			tempSpriteY += moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteY = 0;
				}
		}
		
		sprite.x += tempSpriteX;
		sprite.y += tempSpriteY;
		bmp.x += tempBackX;
		bmp_1.x += tempBackX;
	};
	
	/*
	p.checkInFront = function(){
		for(var i = 0; i < stage.numChildren; i++){
			if(this.y < getChildAt(i).x){
				
			}
		}
	};
	*/
	
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
		console.log(this.label);
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
		}
	};
	
	window.NPC = createjs.promote(NPC, "Sprite");
}());

//Clue Object definition
(function(){
	function Clue(x, y, numframes, url, width, height){
		this.setup(x, y, numframes, url, width, height);
		this.Sprite_constructor(this.spriteSheet);
		clues.push(this);
		this.on("click", p.handleClick);		
	}
	var p = createjs.extend(Clue, createjs.Sprite);
	
	p.setup = function(x, y, numframes, url, width, height){
		this.x = x;
		this.y = y;
		this.discovered = false;
		this.clueInfo = null;
		this.on("click", this.handleClick);
		
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
		console.log("clicked");
		if(!this.discovered){
			this.discovered = true;
			points++;
			addToInventory(this);
		}
	} ;
	
	window.Clue = createjs.promote(Clue, "Sprite");
}());