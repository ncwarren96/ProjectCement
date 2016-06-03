
function showDialogue(targetDialogue, state){
	var clickSound = new Audio("./sounds/click.mp3");
	var overSound = new Audio("./sounds/boop.mp3");
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
			
			createDialougeBox(textContainer, "Cop: A private investigator huh? We have everything under control here, you can go home.", 1, 2, 3, "Ok, bye.", "Need help?", "I do what I want.");
			
		}else if(state == 1){
			
			createDialougeBox(textContainer, "Cop: Bye.", null, null, null, "*Leave*", "*Leave*", "*Leave*");
			
		}else if(state == 2){
			
			createDialougeBox(textContainer, "Cop: I already said we don't need help. Just go home.", null, null, null, "Ok, bye.", "I'll help anyways.", "I do what I want.");
						
		}else if(state == 3){
			
			createDialougeBox(textContainer, "Cop: Just don't mess anything up and mind your own business.", null, null, null, "*Leave*", "*Leave*", "*Leave*");		
			
		}
	}
	
	if(targetDialogue == "guy2"){
		if(state == 0){
			
			createDialougeBox(textContainer, "Who the hell are you?", 1, 1, 1, "Ok, bye.", "Ok, bye.", "Ok, bye.");		
						
		}else if(state == 1){
			
			createDialougeBox(textContainer, "Bye.", null, null, null, "*Leave*", "*Leave*", "*Leave*");
			
		}
	}
	//dead petey 'Dialogue'
	if(targetDialogue == "petey"){
		peteyClue.handleClick();
		//state = null;
		if(state == 0){
			createDialougeBox(textContainer, "Dead", 2, null, null, "Inspect Body", "Leave", "Leave");
		}else if(state == 1){
		}else if(state == 2){
			createDialougeBox(textContainer, "The subjects fingers have been removed", null, null, null, "Leave", "Leave", "Leave");
		}
	}
	// guy 1 Dialogue
	if(targetDialogue == "guy1"){
		if(state == 0){
			createDialougeBox(textContainer, "Hey whats going on here? You work with the police?", 2, 1, 1, "respond", "ignore", "Ok, bye.");	
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
	
	//Creepy cult info man
	if(targetDialogue == "creep"){
		if(secretPoints == 0){
			createDialougeBox(textContainer, "Go away", null, null, null, "Leave", "Leave", "Leave");
		}else if(secretPoints == 1){
			createDialougeBox(textContainer, "Animals don't eat fingers.", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue1);
		}else if(secretPoints == 2){
			createDialougeBox(textContainer, "Mando controls this city", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue2);
		}else if(secretPoints == 3){
			createDialougeBox(textContainer, "Mando Imperium knows what you are up to. Stop.", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue3);
		}else if(secretPoints == 4){
			createDialougeBox(textContainer, "You found the forth clue", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue4);
		}
	}

	if(targetDialogue == "boyce"){
		if(state == 0){
			createDialougeBox(textContainer, "Boyd: We already have this case taken care of, classic mob murder, drug incident.", 1, 2, 3, "Ok. Bye.", "Sure you don't need anything else?", "I have a question.");	
		}else if(state == 1){
			createDialougeBox(textContainer, "Boyd: Bye.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "Boyd: Not from you, Player, why are you here anyways?", 4, 4, 1, "That’s private.", "It intrigued me.", "Leave");
		}else if(state == 3 ){
			createDialougeBox(textContainer, "Boyd: What.", 7, 8, 9, "Didn’t the mob stop dealing in drugs?", "What happened to the guys fingers?", "Did you know Petey?"); 
		}else if(state == 4 ){
			createDialougeBox(textContainer, "Boyd: That's stupid.", null, null, null, "Leave", "Leave", "Leave");				
		}else if(state == 5 ){
		}else if(state == 6 ){
		}else if(state == 7 ){
			createDialougeBox(textContainer, "Boyd: Well I guess they’re back at it.", 3, null, null, "I have another question.", "Leave", "Leave");
		}else if(state == 8 ){
			createDialougeBox(textContainer, "Boyd: Animal ate em.", 3, null, null, "I have another question.", "Leave", "Leave");
		}else if(state == 9 ){
			createDialougeBox(textContainer, "Boyd: All of NYPD knew Petey, he’s been doing gang and drug work for years. Looks like someone else got him though.", 3, null, null, "I have another question.", "Leave", "Leave");
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
		var text0 = createText(text0, 20, 25, "20px Courier", "#FFFFFF");
		textContainer.addChild(text0);
		
		var left_rect = new createjs.Shape();
		left_rect.graphics.beginFill("#FF0000").drawRect(10, 85, 480, 18);
		container.addChild(left_rect);
		var left_rect_text = createText(text1, 20, 98, "16px Courier", "#FFFFFF");
		container.addChild(left_rect_text);
		
		var mid_rect = new createjs.Shape();
		mid_rect.graphics.beginFill("#FF0000").drawRect(10, 105, 480, 18);
		container.addChild(mid_rect);
	    var mid_rect_text = createText(text2, 20, 118, "16px Courier", "#FFFFFF");
		container.addChild(mid_rect_text);
		
		var right_rect = new createjs.Shape();
		right_rect.graphics.beginFill("#FF0000").drawRect(10, 125, 480, 18);
		container.addChild(right_rect);
	    var right_rect_text = createText(text3, 20, 138, "16px Courier", "#FFFFFF");
		container.addChild(right_rect_text);
		
		var rects = {
			left_rect: {rect: left_rect, target: target1},
			mid_rect: {rect: mid_rect, target: target2},
			right_rect: {rect: right_rect, target: target3}
		};
		rects.left_rect.rect.on("click", handleClick_left, null, true);
		rects.mid_rect.rect.on("click", handleClick_mid, null, true);
		rects.right_rect.rect.on("click", handleClick_right, null, true);
		
		rects.left_rect.rect.on("mouseover", handleOver);
		rects.mid_rect.rect.on("mouseover", handleOver);
		rects.right_rect.rect.on("mouseover", handleOver);
		
		rects.left_rect.rect.on("mouseout", handleOut);
		rects.mid_rect.rect.on("mouseout", handleOut);
		rects.right_rect.rect.on("mouseout", handleOut);
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
		
		function handleOver(evt){
			this.alpha = .8;
			overSound.play();
		}
		
		function handleOut(evt){
			this.alpha = 1;
		}
	}
	
	return;
}

function createText(string, x, y, font, color){
	var text = new createjs.Text(string, font, color);
	text.x = x;
	text.y = y;
	text.lineHeight = 20;
	text.lineWidth = 475;
	text.textBaseline = "alphabetic";
	return text;
}


