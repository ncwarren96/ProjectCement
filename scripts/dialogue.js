
function showDialogue(targetDialogue, state){
	player.immobile = true;
	if(state == null){
		player.immobile = false;
		return;
	}
	
	//make text container
	var textContainer = new createjs.Container();
	textContainer.x = 150;
	textContainer.y = 15;
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
		textContainer.removeAllChildren();
		// if(state == 0){
			// createDialougeBox(textContainer, "The dead body lies at your feet", null, null, null, "Leave", "Leave", "Leave");
		// }
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
	if(targetDialogue == "creep" && secretPoints == 0){
		if(state == 0){
			createDialougeBox(textContainer, "Go away", null, null, null, "Leave", "", "");
			//player.fixPosition();
		}
	}
	if(targetDialogue == "creep" && secretPoints == 1){	
		if(state == 0){
			createDialougeBox(textContainer, "Animals don't eat fingers.", 1, null, null, "What?", "", "");
			removeFromInventory(secretClue1);
		}else if(state == 1){
			createDialougeBox(textContainer, "If you find any more of these, bring them to me.", null, null, null, "Ok", "", "");
		}
	}
	if(targetDialogue == "creep" && secretPoints == 2){
		if(state == 0){
			createDialougeBox(textContainer, "Petey owed a lot more than money", 1, null, null, "To who?", "", "");
			removeFromInventory(secretClue2);
		}else if(state == 1){
			createDialougeBox(textContainer, "Mando ", 1, null, null, "To who?", "", "");
		}
	}
	if(targetDialogue == "creep" && secretPoints == 3){
		if(state == 0){
			createDialougeBox(textContainer, "The cops know what you're up to, be careful.", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue2);
		}}
	if(targetDialogue == "creep" && secretPoints == 4){
		if(state == 0){
			createDialougeBox(textContainer, "Mando controls this city, and everyone in it.", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue2);
		}}
	if(targetDialogue == "creep" && secretPoints == 5){
		if(state == 0){
			createDialougeBox(textContainer, "Mando Imperium knows.", null, null, null, "Leave", "Leave", "Leave");
			removeFromInventory(secretClue2);
		}}	

	if(targetDialogue == "boyce"){
		if(state == 0){
			createDialougeBox(textContainer, "Boyd: We already have this case taken care of, classic mob murder, drug incident.", 1, 2, 3, "Ok. Bye.", "Sure you don't need anything else?", "I have a question.");	
		}else if(state == 1){
			createDialougeBox(textContainer, "Boyd: Bye.", null, null, null, "*Leave", "Leave*", "*Leave*");
		}else if(state == 2){
			createDialougeBox(textContainer, "Boyd: Not from you, Player, why are you here anyways?", 4, 4, 1, "That’s private.", "It intrigued me.", "*Leave*");
		}else if(state == 3 ){
			createDialougeBox(textContainer, "Boyd: What.", 5, 8, 9, "What makes you say it was the mob?", "What happened to the guys fingers?", "Did you know Petey?"); 
		}else if(state == 4 ){
			createDialougeBox(textContainer, "Boyd: That's stupid.", null, null, null, "Leave", "Leave", "Leave");				
		}else if(state == 5 ){
			createDialougeBox(textContainer, "Boyd: The cement shoes! Y'know, from the stories?", 6, null, 3, "But Vinny and his gang stopped dealing in drugs.", "Sure.", "I have another question.");
		}else if(state == 6 ){
			createDialougeBox(textContainer, "Boyd: Well, I guess The Barber is back in business. We will be arresting him soon.", null, null, 3, "Ok.", "*Leave*", "I have another question.");
		}else if(state == 7 ){
		}else if(state == 8 ){
			createDialougeBox(textContainer, "Boyd: Animal ate em.", 3, null, null, "I have another question.", "*Leave*", "*Leave*");
		}else if(state == 9 ){
			createDialougeBox(textContainer, "Boyd: All of NYPD knew Petey, he's been arrested countless times for theft, drugs, you name it.", 10, null, null, "--->", "*Leave*", "*Leave*");
		}else if(state == 10){
			createDialougeBox(textContainer, "Boyd: We've been trying to get him locked up for good, looks like someone else got him though.", 3, null, null, "I have another question.", "*Leave*", "*Leave*");
		}
	}
	
	if(targetDialogue == "phone"){
		if(state == 0){
			createDialougeBox(textContainer, "Number?", 1, 9, 9, "555-1762", "555-9572", "555-0080");
		}else if(state == 1){
			createDialougeBox(textContainer, "This is Kristina, Petey's girlfriend", 2, null, 4, "-->", "", "How long have you known Petey?");
		}else if(state == 2){
			createDialougeBox(textContainer, "Last I saw Petey he said he was goin to the barber.", 3, null, null, "-->", "Leave", "Leave");
		}else if(state == 3){
			createDialougeBox(textContainer, "All I knew is he owed a lot of money to someone. Some ho named Madalin? Madison?", null, null, null, "Thanks", "Leave", "Leave");
		}else if(state ==4){
			createDialougeBox(textContainer, "Been a few years, but he got me knocked up 4 months ago so now we livin' together", 2, null, null, "-->", "Leave", "Leave");
		}else if(state == 9){
			createDialougeBox(textContainer, "No Answer.", null, null, null, "Leave", "Leave", "Leave");

		}
	}
	
	if(targetDialogue == "barber"){
		if(state == 0){
			createDialougeBox(textContainer, "Need a new trim?", 1, 2, 5, "Not today. Know the name Peter Gonzalez?", "No thanks. But has the NYPD spoken to you lately?", "Sure.");
			barberDeathEvent = true;
		}else if(state == 1){
			createDialougeBox(textContainer, "Dont know, doesn't ring a bell", 3, 6, 6, "Cut the shit Vinny, cops are on to you.", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "No, what would they need to know from me?", 4, 6, 6, "They said you murdered someone!", "Leave", "Leave");
		}else if(state == 3){
			createDialougeBox(textContainer, "I really have no idea what you're talking about.", 4, 6, 6, "They said you murdered someone!", "Leave", "Leave");
		}else if(state == 4){
			createDialougeBox(textContainer, "Now I know the cops hate me for my past crimes, but I've been out of the game for years.", 6, 7, 6, "It looks like someone is trying to frame you.", "Can you look up Peter Gonzales in your recipts?", "Leave");
		}else if(state == 5){
			createDialougeBox(textContainer, "It will be 18$. Cash only.", 6, null, null, "Oh, I don't have any cash on me, sorry.", "", "");
		}else if(state == 6){
			createDialougeBox(textContainer, "Good luck.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 7){
			createDialougeBox(textContainer, "Sure, let me see...", 8, null, null, "...", "Leave", "Leave");
		}else if(state == 8){
			createDialougeBox(textContainer, "Here he is, was in here 2 weeks ago. I remember him now, weird fellow. Kept mumbling about a Mandolin? I assumed it was drugs", 6, null, null, "Thanks.", "Leave", "Leave");
		}
	}
	
	if(targetDialogue == "barberDead"){
		if(state == 0){
			textContainer.removeAllChildren();
			player.immobile = false;
		}
	}
	
	if(targetDialogue == "haircut"){
		createDialougeBox(textContainer, "I'm waiting for a haircut.", null, null, null, "Leave", "Leave", "Leave");
	}
	
	if(targetDialogue == "barrel"){
		if(state==0){
			textContainer.removeAllChildren();
			player.immobile = false;
		}
	}
	
	if(targetDialogue == "deskCop"){
		if(state == 0){
			createDialougeBox(textContainer, "Can I help You?", 2, 1, 1, "I need crinal files on peter gonzales", "ignore", "Ok, bye.");	
		}else if(state == 1){
			createDialougeBox(textContainer, "Bye.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "we dont give out that kind of information", 3, 4, 1, "ask question", "SHOW ME THOSE FILES!", "Leave");
		}else if(state == 3 ){
			createDialougeBox(textContainer, "Do you know who owns the barber shop ? ", 5, 1, 1, "listen", "Leave", "Leave"); 
		}else if(state == 4 ){
			createDialougeBox(textContainer, " no!, now leave or will arrest you.", 1, 1, 1, "Leave", "Leave", "Leave");				
		}else if(state == 5 ){
			createDialougeBox(textContainer, "yeah that's viney, he does some of the best cuts in town, that where most of the boys get there trim. ", null, null, null, "Leave", "Leave", "Leave");
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
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
			showDialogue(targetDialogue, rects.left_rect.target);
		}
		      
		function handleClick_mid(evt) {
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
		    showDialogue(targetDialogue, rects.mid_rect.target);
		}
		        
		function handleClick_right(evt) {
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
		    showDialogue(targetDialogue, rects.right_rect.target);
		}
		
		function handleOver(evt){
			this.alpha = .8;
			createjs.Sound.play("overSound");
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


