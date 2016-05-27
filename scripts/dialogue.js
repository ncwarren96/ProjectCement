
function showDialogue(targetDialogue, state){
	player.immobile = true;
	if(state == null){
		player.immobile = false;
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
			
			createDialougeBox(textContainer, "A private investigator huh? We have everything\n under control here, you can go home.", 1, 2, 3, "Ok, bye.", "Need help?", "I do what\nI want.");
			
		}else if(state == 1){
			
			createDialougeBox(textContainer, "Bye.", null, null, null, "*Leave*", "*Leave*", "*Leave*");
			
		}else if(state == 2){
			
			createDialougeBox(textContainer, "I already said we don't need help. Just go home.", null, null, null, "Ok, bye.", "I'll help\n anyways.", "I do what\nI want.");
						
		}else if(state == 3){
			
			createDialougeBox(textContainer, "Just don't mess anything up and mind your own\nbusiness.", null, null, null, "*Leave*", "*Leave*", "*Leave*");		
			
		}
	}
	
	if(targetDialogue == "guy2"){
		if(state == 0){
			
			createDialougeBox(textContainer, "Who the hell are you?", 1, 1, 1, "Ok, bye.", "Ok, bye.", "Ok, bye.");		
						
		}else if(state == 1){
			
			createDialougeBox(textContainer, "Bye.", null, null, null, "*Leave*", "*Leave*", "*Leave*");
			
		}
	}
	// guy 1 Dialogue
	if(targetDialogue == "petey"){
		if(state == 0){
			createDialougeBox(textContainer, "Dead", 2, 1, 1, "inspect body", "Leave", "Leave");	
		}else if(state == 1){
			createDialougeBox(textContainer, "Bye.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "The subjects fingers have been removed", null, null, null, "Leave", "Leave", "Leave");
		}
	}
	// guy 1 Dialogue
	if(targetDialogue == "guy1"){
		if(state == 0){
			createDialougeBox(textContainer, "hey whats going on here? You work with the police ?", 2, 1, 1, "respond", "ignore", "Ok, bye.");	
		}else if(state == 1){
			createDialougeBox(textContainer, "Bye.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "No, im not with the police, im a private investigator", 3, 1, 1, "ask question", "ignore", "Leave");
		}else if(state == 3 ){
			createDialougeBox(textContainer, "Do you know who petey gonzales is ? ", 4, 1, 1, "listen", "Leave", "Leave"); 
		}else if(state == 4 ){
			createDialougeBox(textContainer, "Know idea who that is?  ", 5, 5, 5, "Leave", "Leave", "Leave");				
		}else if(state == 5 ){
			createDialougeBox(textContainer, "Thank you for your time", null, null, null, "Leave", "Leave", "Leave");
		}
	}
	
	if(textContainer.children.length > 0){
		stage.addChild(textContainer);//adds textContainer to stage if it has children
	}
	
	//container: container to add to
	//text0: NPC text to display
	//target1: target state taken to from text1
	//target2: target state taken to from text2
	//target3: target state taken to from text3
	//text1-3: player responses to displayed NPC text
	function createDialougeBox(container, text0, target1, target2, target3, text1, text2, text3){
		var text0 = createText(text0, 20, 25, "20px Arial", "#FFFFFF");
		textContainer.addChild(text0);
		
		var left_rect = new createjs.Shape();
		left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
		container.addChild(left_rect);
		var left_rect_text = createText(text1, 20, 120, "16px Arial", "#FFFFFF");
		container.addChild(left_rect_text);
		
		var mid_rect = new createjs.Shape();
		mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
		container.addChild(mid_rect);
	    var mid_rect_text = createText(text2, 200, 120, "16px Arial", "#FFFFFF");
		container.addChild(mid_rect_text);
		
		var right_rect = new createjs.Shape();
		right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
		container.addChild(right_rect);
	    var right_rect_text = createText(text3, 390, 120, "16px Arial", "#FFFFFF");
		container.addChild(right_rect_text);
		
		var rects = {
			left_rect: {rect: left_rect, target: target1},
			mid_rect: {rect: mid_rect, target: target2},
			right_rect: {rect: right_rect, target: target3}
		};
		rects.left_rect.rect.on("click", handleClick_left, null, true);
		rects.mid_rect.rect.on("click", handleClick_mid, null, true);
		rects.right_rect.rect.on("click", handleClick_right, null, true);
		
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


