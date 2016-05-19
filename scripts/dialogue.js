
function showDialogue(targetDialogue, state){
	//make text container
	var textContainer = new createjs.Container();
	textContainer.x = 200;
	textContainer.y = 0;
	//console.log("showDialogue");
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 500, 150);
	textContainer.addChild(bg_rect);
	if(targetDialogue == "cop_beach"){
		if(state == 0){
			//text to draw
			var text = createText("A private investigator huh? We have everything\n under control here, you can go home.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);

			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("Ok, bye.", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				showDialogue(targetDialogue, 1);
	        }
		    
		    //middle rect box, text, and onclick function
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
			textContainer.addChild(mid_rect);
			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            showDialogue(targetDialogue, 2);
	        }

	        var mid_rect_text = createText("Need help?", 200, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(mid_rect_text);

			//right rect box, text, and onclick function
			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
			textContainer.addChild(right_rect);
			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            showDialogue(targetDialogue, 3);
	        }

	        var right_rect_text = createText("I do what\nI want.", 390, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(right_rect_text);

		}else if(state == 1){
			//text to draw
			var text = createText("Bye.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);


			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("*Leave*", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				//showDialogue(targetDialogue, 1);
	        }
		    

		    //middle rect box, text, and onclick function
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
			textContainer.addChild(mid_rect);

			var mid_rect_text = createText("*Leave*", 200, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(mid_rect_text);

			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 2);
	        }


			//right rect box, text, and onclick function
			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
			textContainer.addChild(right_rect);

			var right_rect_text = createText("*Leave*", 390, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(right_rect_text);

			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 3);
	        }
		}else if(state == 2){
			//text to draw
			var text = createText("I already said we don't need help. Just go home.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);


			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("Ok, bye.", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				//showDialogue(targetDialogue, 1);
	        }
		    

		    //middle rect box, text, and onclick function
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
			textContainer.addChild(mid_rect);

			var mid_rect_text = createText("I'll help\n anyways.", 200, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(mid_rect_text);

			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 2);
	        }


			//right rect box, text, and onclick function
			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
			textContainer.addChild(right_rect);

			var right_rect_text = createText("I do what\nI want.", 390, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(right_rect_text);

			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            showDialogue(targetDialogue, 3);
	        }
		
		}else if(state == 3){
			//text to draw
			var text = createText("Just don't mess anything up and mind your own\nbusiness.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);


			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("*Leave*", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				//showDialogue(targetDialogue, 1);
	        }
		    

		    //middle rect box, text, and onclick function
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
			textContainer.addChild(mid_rect);

			var mid_rect_text = createText("*Leave*", 200, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(mid_rect_text);

			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 2);
	        }


			//right rect box, text, and onclick function
			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
			textContainer.addChild(right_rect);

			var right_rect_text = createText("*Leave*", 390, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(right_rect_text);

			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 3);
	        }
			
		}else if(state == 4){

		}else if (state == 5){

		}else if (state == 6){

		}	
	}
	
	if(targetDialogue == "guy2"){
		if(state == 0){
			//text to draw
			var text = createText("Who the hell are you?", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);
			
			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("Ok, bye.", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				showDialogue(targetDialogue, 1);
	        }		
		}else if(state == 1){
			//text to draw
			var text = createText("Bye.", 20, 25, "20px Arial", "#FFFFFF");
			textContainer.addChild(text);


			//left rect box, text, and onclick function
			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 120, 50);
			textContainer.addChild(left_rect);

			var left_rect_text = createText("*Leave*", 20, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(left_rect_text);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
				//showDialogue(targetDialogue, 1);
	        }
		   
		    //middle rect box, text, and onclick function
			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(190, 100, 120, 50);
			textContainer.addChild(mid_rect);

			var mid_rect_text = createText("*Leave*", 200, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(mid_rect_text);

			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 2);
	        }


			//right rect box, text, and onclick function
			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(370, 100, 120, 50);
			textContainer.addChild(right_rect);

			var right_rect_text = createText("*Leave*", 390, 120, "16px Arial", "#FFFFFF");
			textContainer.addChild(right_rect_text);

			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
				textContainer.removeAllChildren();
				stage.removeChild(textContainer);
	            //showDialogue(targetDialogue, 3);
	        }
		}
	}
	
	
	if(textContainer.children.length > 0){
		stage.addChild(textContainer);//adds textContainer to stage if it has children
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