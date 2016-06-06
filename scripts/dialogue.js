
function showDialogue(targetDialogue, state){
	player.immobile = true;
	if(state == null){
		player.immobile = false;
		return;
	}
	
	//make text container
	var textContainer = new createjs.Container();
	textContainer.x = 150;
	textContainer.y = 35;
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 500, 150);
	textContainer.addChild(bg_rect);
	
	if(targetDialogue == "intro"){
		if(state == 0){
			createDialougeBox(textContainer, "Boyd: We already have this case taken care of, classic mob murder, drug incident.", 1, 1, 1, "Sure you don’t need anything else?", null, null);
		}else if(state == 1){
			createDialougeBox(textContainer, "Boyd: Not from you, Dixson. Why are you here anyways?", 2, 3, 3, "Wouldn't you like to know.", "The case intruiged me", "It sounded cool.");
		}else if(state == 2){
			createDialougeBox(textContainer, "Boyd: Shut up.", null, null, null, "Leave", null, null);
		}else if(state == 3){
			createDialougeBox(textContainer, "Boyd: That's stupid.", null, null, null, "Leave", null, null);
		}
	}
	
	if(targetDialogue == "cop_beach"){
		if(state == 0){
			
			createDialougeBox(textContainer, "Cop: A private investigator huh? We have everything under control here, you can go home.", 1, 2, 3, "Did you know Petey?", "Need help?", "I do what I want.");
			
		}else if(state == 1){
			
			createDialougeBox(textContainer, "Cop: I've heard the others mention him, he was top member in the 100 Cloccs, an off-shoot of the G-Stone Crips, so a pretty dangerous guy.", null, null, null, null, null, "Thanks.");
			
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
		boyce.questions = true;
		console.log(boyce.questions);
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
		
		var secret = secrets.pop();
		
		if(secret == null){
			if(state == 0){
				createDialougeBox(textContainer, "Go away", null, null, null, "Leave", "", "");
			}else if(state == 1){
				createDialougeBox(textContainer, "If you find any more of these, bring them to me.", null, null, null, "Ok...", null, null);
				removeFromInventory(secretClue1);
			}
		}else{
			
			if(secret.label == "M"){
				createDialougeBox(textContainer, "Animals don't eat fingers.", null, null, 1, null, null, "What?");
			}else if(secret.label == "A"){
				createDialougeBox(textContainer, "Petey owed a lot more than money. And to someone very important.", null, null, null, "To who?", "", "");
				removeFromInventory(secretClue2);
			}else if(secret.label == "N"){
				createDialougeBox(textContainer, "The mob stopped dealing in drugs long ago.", null, null, null, null, null, "Leave");
				removeFromInventory(secretClue3);
			}else if(secret.label == "D"){
				createDialougeBox(textContainer, "Mando controls this city, and everyone in it. But if you complete this case, we could stop them", null, null, null, null, null, "Leave");
				removeFromInventory(secretClue4);
			}else if(secret.label == "O"){
				createDialougeBox(textContainer, "Mando Imperium knows.", null, null, null, "Leave", "Leave", "Leave");
				removeFromInventory(secretClue5);
			}
		}	
	}

	//Boyce Dialouge
	if(targetDialogue == "boyce"){
		if(state == 0){
			createDialougeBox(textContainer, "Boyd: We already have this case taken care of, classic mob murder, drug incident.", 5, 8, 9, "What makes you say it was the mob?", "What happened to the guys fingers?", "Did you know Petey?");	
		}else if(state == 3){
			createDialougeBox(textContainer, "Boyd: What.", 5, 8, 9, "What makes you say it was the mob?", "What happened to the guys fingers?", "Did you know Petey?");					
		}else if(state == 5 ){
			
			createDialougeBox(textContainer, "Boyd: The cement shoes! Y'know, from the stories?", 6, null, 3, "But Vinny and his gang stopped dealing in drugs.", "Sure.", "I have another question.");
			
		}else if(state == 6 ){
			
			createDialougeBox(textContainer, "Boyd: Well, I guess The Barber is back in business. We will be arresting him soon.", null, null, 3, "Leave", null, "I have another question.");

		}else if(state == 8 ){
			
			createDialougeBox(textContainer, "Boyd: Animal ate em.", 3, null, null, "I have another question.", "Leave", null);
			
		}else if(state == 9 ){
			
			createDialougeBox(textContainer, "Boyd: All of NYPD knew Petey, he's been arrested countless times for theft, drugs, you name it.", 10, null, null, "--->", null, null);
			
		}else if(state == 10){
			
			createDialougeBox(textContainer, "Boyd: We've been trying to get him locked up for good, looks like someone else got him though.", 3, null, null, "I have another question.", "Leave", null);
			
		}
	}
	
	if(targetDialogue == "phone"){
		if(state == 0){
			createDialougeBox(textContainer, "Number?", 1, 9, 9, "555-1762", "555-9572", "555-0080");
		}else if(state == 1){
			createDialougeBox(textContainer, "Kristina: Hello?", 2, null, null, "Hello this is Private Investigator Clive Dixon.", "Sorry wrong number.", null);
		}else if(state == 2){
			createDialougeBox(textContainer, "Kristina: Did you find Petey?", 3, 4, 5, "Um... I'm working on it.", "Yes, he's in a lot of trouble'", "Yes. He's dead Kristina.");
		
		}else if(state == 3){
			createDialougeBox(textContainer, "Kristina: Well what do you want?", 8, 7, 6, "Where did you say you last saw Petey?", "How long have you two known each other?", "Know any problems Petey was facing?");
		}else if(state == 4){
			createDialougeBox(textContainer, "Kristina: Typical. That's Petey, always gettin into trouble.", 8, 7, 6, "Where did you say you last saw Petey?", "How long have you two known each other?", "Know any problems Petey was facing?");
		}else if(state == 5){
			createDialougeBox(textContainer, "Kristina: That's what he gets for leaving me.", 8, 7, 6, "Where did you say you last saw Petey?", "How long have you two known each other?", "Know any problems Petey was facing?");
		
		}else if(state == 6){
			createDialougeBox(textContainer, "Kristina: All I knew is he owed a lot of money to someone. Some ho named Madalin? Madison?", 3, null, 10, "I have another question.", null, "Thank you for your cooperation. Goodbye.");
		}else if(state ==7){
			createDialougeBox(textContainer, "Kristina: Been a few years, but he got me knocked up 4 months ago so now we livin' together", 3, null, 10, "I have another question.", null, "Thank you for your cooperation. Goodbye.");
		}else if(state ==8){
			talkedToKristina = true;
			createDialougeBox(textContainer, "Kristina: Last I saw Petey he said he was goin to the barber.", 3, null, 10, "I have another question.", null, "Thank you for your cooperation. Goodbye.");
			
			
		}else if(state == 9){
			createDialougeBox(textContainer, "No Answer.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 10){
			createDialougeBox(textContainer, "*You hung up the phone and then noticed this slip of paper on the wall.*", null, null, null, "Leave", "Leave", "Leave");
			secretClue2.handleClick();

		}
	}
	
	if(targetDialogue == "barber"){
		console.log(talkedToKristina);
		if(state == 0){
			createDialougeBox(textContainer, "Need a new trim?", 2, talkedToKristina? 1 : 6, 5, "No thanks. But has the NYPD spoken to you lately?",  talkedToKristina? "Not today. Know the name Peter Gonzalez?" : "Not today" , "Sure.");
		}else if(state == 1){
			createDialougeBox(textContainer, "Dont know, doesn't ring a bell", 7, 6, 6, "Could you try looking him up in your customer files?", "Leave", "Leave");
		}else if(state == 2){
			createDialougeBox(textContainer, "No, what would they need to know from me?", 4, 6, 6, "They said you murdered someone!", "Leave", "Leave");
		}else if(state == 3){
			createDialougeBox(textContainer, "I really have no idea what you're talking about.", 4, 6, 6, "They said you murdered someone!", "Leave", "Leave");
		}else if(state == 4){
			createDialougeBox(textContainer, "Now I know the cops hate me for my past crimes, but I've been out of the game for years.", 6, 6, 6, "It looks like someone is trying to frame you.", "I belive you. I'll keep looking into it.", "Leave");
		}else if(state == 5){
			createDialougeBox(textContainer, "It will be 18$. Cash only.", null, null, null, "Oh, I don't have any cash on me, sorry.", null, null);
		}else if(state == 6){
			createDialougeBox(textContainer, "Good luck.", null, null, null, "Leave", "Leave", "Leave");
		}else if(state == 7){
			createDialougeBox(textContainer, "Sure, let me see...", 8, null, null, "...", "Leave", "Leave");
		}else if(state == 8){
			createDialougeBox(textContainer, "Here he is, was in here 2 weeks ago. I remember him now, weird fellow. Kept mumbling about a Mandolin? I assumed it was drugs."+
											 " Then some guy came in here and said he had to go before I could finish.", null, null, 6, null, null, "Thanks.");
			barberDeathEvent = true;
		}
	}
	
	if(targetDialogue == "barberDead"){
		textContainer.removeAllChildren();
	}
	
	if(targetDialogue == "haircut"){
		createDialougeBox(textContainer, "I'm waiting for a haircut.", null, null, null, "Leave", "Leave", "Leave");
	}
	
	if(targetDialogue == "barrel"){
		if(state==0){
			createDialougeBox(textContainer, "*You pull this slip of paper from the ashes*", null, null, null, null, null, "Leave");
			//player.immobile = false;
			secretClue1.handleClick();
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
			createDialougeBox(textContainer, "yeah that's viney, he does some of the best cuts in town. That's where the squad gets there trim. ", null, null, null, "Leave", "Leave", "Leave");
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
		console.log(text0);
		
		var text0 = createText(text0, 20, 25, "20px Courier", "#FFFFFF");
		textContainer.addChild(text0);
		
		if(text1 != null){
			var top_rect = new createjs.Shape();
			top_rect.graphics.beginFill("#FF0000").drawRect(10, 85, 480, 18);
			container.addChild(top_rect);
			var top_rect_text = createText(text1, 20, 98, "16px Courier", "#FFFFFF");
			container.addChild(top_rect_text);
			
			top_rect.target = target1;
			
			top_rect.on("click", handleClick_top, null, true);
			top_rect.on("mouseover", handleOver);
			top_rect.on("mouseout", handleOut);
		}
		
		if(text2 != null){
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(10, 105, 480, 18);
			container.addChild(mid_rect);
		    var mid_rect_text = createText(text2, 20, 118, "16px Courier", "#FFFFFF");
			container.addChild(mid_rect_text);
			
			mid_rect.target = target2;
			
			mid_rect.on("click", handleClick_mid, null, true);
			mid_rect.on("mouseover", handleOver);
			mid_rect.on("mouseout", handleOut);
		}
		
		if(text3 != null){
			var bot_rect = new createjs.Shape();
			bot_rect.graphics.beginFill("#FF0000").drawRect(10, 125, 480, 18);
			container.addChild(bot_rect);
		    var bot_rect_text = createText(text3, 20, 138, "16px Courier", "#FFFFFF");
			container.addChild(bot_rect_text);
			
			bot_rect.target = target3;
			
			bot_rect.on("click", handleClick_bot, null, true);
			bot_rect.on("mouseover", handleOver);
			bot_rect.on("mouseout", handleOut);
		}
		
		/*var rects = {
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
		rects.right_rect.rect.on("mouseout", handleOut);*/
		
		function handleClick_top(evt) {
			console.log("clicked ");
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
			showDialogue(targetDialogue, top_rect.target);
		}
		      
		function handleClick_mid(evt) {
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
		    showDialogue(targetDialogue, mid_rect.target);
		}
		        
		function handleClick_bot(evt) {
			createjs.Sound.play("clickSound");
			textContainer.removeAllChildren();
			stage.removeChild(textContainer);
		    showDialogue(targetDialogue, bot_rect.target);
		}
		
		function handleOver(evt){
			this.alpha = .8;
			createjs.Sound.play("boopSound");
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
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, 0, 1, 1);
	text.hitArea = hit;
	return text;
}


