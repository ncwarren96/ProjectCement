(function(){
	function NPC(x, y, numframes, url, width, height){
		this.spriteSheet = this.makeSheet(url, numframes, width, height);
		this.Sprite_constructor(this.spriteSheet);
		
		this.x = x;
		this.y = y;
		
		this.back = getBackgroundPosition(x, y);
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
