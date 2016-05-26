
function showDialogue(targetDialogue, state){
	if(state == null){
		return;
	}
	
	//make text container
	var textContainer = new createjs.Container();
	textContainer.x = 200;
	textContainer.y = 0;
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 500, 150);
	textContainer.addChild(bg_rect);
	if(targetDialogue == "cop_beach"){
		if(state == 0){
			//text to draw
			var text = createText("A private investigator huh? We have everything\n under control here, you can go home.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			//create text boxes
			var rects =	createDialougeBox(textContainer, 1, 2, 3);
			createStateTexts(textContainer, "Ok, bye.", "Need help?", "I do what\nI want.");
			
		}else if(state == 1){
			//text to draw
			var text = createText("Bye.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			var rects =	createDialougeBox(textContainer, null, null, null);
			createStateTexts(textContainer, "*Leave*", "*Leave*", "*Leave*");
			
		}else if(state == 2){
			//text to draw
			var text = createText("I already said we don't need help. Just go home.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			var rects =	createDialougeBox(textContainer, null, null, null);
			createStateTexts(textContainer, "Okm bye.", "I'll help\n anyways.", "I do what\nI want.");
			
		}else if(state == 3){
			//text to draw
			var text = createText("Just don't mess anything up and mind your own\nbusiness.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			var rects =	createDialougeBox(textContainer, null, null, null);
			createStateTexts(textContainer, "*Leave*", "*Leave*", "*Leave*");
			
		}
	}
	
	if(targetDialogue == "guy2"){
		if(state == 0){
			//text to draw
			var text = createText("Who the hell are you?", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			var rects =	createDialougeBox(textContainer, 1, 1, 1);
			createStateTexts(textContainer, "Ok, bye.", "Ok, bye.", "Ok, bye.");
					
		}else if(state == 1){
			//text to draw
			var text = createText("Bye.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			var rects = createDialougeBox(textContainer, null, null, null);
			createStateTexts(textContainer, "*Leave*", "*Leave*", "*Leave*");
			
		}
	}
	
	
	if(textContainer.children.length > 0){
		stage.addChild(textContainer);//adds textContainer to stage if it has children
	}
	
	function handleClick_left(evt) {
		textContainer.removeAllChildren();
		stage.removeChild(textContainer);
		showDialogue(targetDialogue, rects.left_rect.target);
	}
	      
	function handleClick_mid(evt) {
		textContainer.removeAllChildren();
		stage.removeChild(textContainer);
	    showDialogue(targetDialogue, rects.mid_rect.target);
	}
	        
	function handleClick_right(evt) {
		textContainer.removeAllChildren();
		stage.removeChild(textContainer);
	    showDialogue(targetDialogue, rects.right_rect.target);
	}
	
	function createDialougeBox(container, target1, target2, target3){
		var left_rect = new createjs.Shape();
		left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
		container.addChild(left_rect);
		
		var mid_rect = new createjs.Shape();
		mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
		container.addChild(mid_rect);
		
		var right_rect = new createjs.Shape();
		right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
		container.addChild(right_rect);
		
		var rects = {
			left_rect: {rect: left_rect, target: target1},
			mid_rect: {rect: mid_rect, target: target2},
			right_rect: {rect: right_rect, target: target3}
		};
		rects.left_rect.rect.on("click", handleClick_left, null, true);
		rects.mid_rect.rect.on("click", handleClick_mid, null, true);
		rects.right_rect.rect.on("click", handleClick_right, null, true);
		return rects;
	}
	
	function createStateTexts(container, text1, text2, text3){
		var left_rect_text = createText(text1, 20, 120, "16px Arial", "#FFFFFF");
		textContainer.addChild(left_rect_text);
		
	    var mid_rect_text = createText(text2, 200, 120, "16px Arial", "#FFFFFF");
		textContainer.addChild(mid_rect_text);
		
	    var right_rect_text = createText(text3, 390, 120, "16px Arial", "#FFFFFF");
		textContainer.addChild(right_rect_text);
	}
	
	return;
}

function createText(string, x, y, font, color){
	var text = new createjs.Text(string, font, color);
	text.x = x;
	text.y = y;
	text.textBaseline = "alphabetic";
	return text;
}


