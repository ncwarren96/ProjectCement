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
		var KEYCODE_W = 87;
		var KEYCODE_A = 65;
		var KEYCODE_S = 83;
		var KEYCODE_D = 68;
		
		var pt = this.localToGlobal(0, 0);
		var gWidth = stage.canvas.width;
		var gHeight = stage.canvas.height;
		var sheet = this.spriteSheet;
		var sWidth = sheet._frameWidth;
		var sHeight = sheet._frameHeight;
		var moveAmount = 10;
		
		var tempSpriteX = tempSpriteY = tempBackX = 0;
		
		var backPoint = getBackgroundPosition(this.x, this.y);
		
		//Directional Movement
		//Left
		if(keys[KEYCODE_A] === true && this.x > 0){
			if(this.currentFrame != 1){
				this.advance();
			}
			if(pt.x > 200 || bmp.x >= 0){
				tempSpriteX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteX = 0;
				}
			}else{
				this.x = 200;
				tempBackX = moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteX = 0;
				}
			}
		}
		//Right
		if(keys[KEYCODE_D] === true && this.x < gWidth-sWidth){
			if(this.currentFrame != 0){
				this.advance();
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
				this.x = gWidth-200-sWidth;
				tempBackX -= moveAmount;
				if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempBackX = 0;
					console.log(tempBackX);
				}else if(backPoint.y+135 === gHeight){
					if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+134+tempSpriteY)){
						tempSpriteX = 0;
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
		if(keys[KEYCODE_S] === true && this.y < gHeight-sHeight){
			tempSpriteY += moveAmount;
			if(bmp_1.hitTest(backPoint.x+18+tempSpriteX, backPoint.y+135+tempSpriteY)){
					tempSpriteY = 0;
				}
		}
		
		this.x += tempSpriteX;
		this.y += tempSpriteY;
		bmp.x += tempBackX;
		bmp_1.x += tempBackX;
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