
function showDialogue(targetDialogue, state){
	//make text container
	var textContainer = new createjs.Container();
	textContainer.x = 200;
	textContainer.y = 0;
	//console.log("showDialogue");
	var bg_rect = new createjs.Shape();
	bg_rect.graphics.beginFill("#000").drawRect(0, 0, 500, 150);
	textContainer.addChild(bg_rect);
	if(targetDialogue == "test"){
		if(state == 0){
			console.log("0!");
			//text to draw
			var text = createText("Hello World", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
	            showDialogue(targetDialogue, 1);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);
			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
	            showDialogue(targetDialogue, 2);
	        }

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
	            showDialogue(targetDialogue, 3);
	        }
		}else if(state == 1){
			console.log("0!");
			//text to draw
			var text = createText("You clicked 1", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
	            showDialogue(targetDialogue, 1);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);
			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
	            showDialogue(targetDialogue, 2);
	        }

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
	            showDialogue(targetDialogue, 3);
	        }
		}else if(state == 2){
			console.log("0!");
			//text to draw
			var text = createText("You clicked 2", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
	            showDialogue(targetDialogue, 1);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);
			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
	            showDialogue(targetDialogue, 2);
	        }

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
	            showDialogue(targetDialogue, 3);
	        }
		}else if(state == 3){
			console.log("0!");
			//text to draw
			var text = createText("You clicked 3", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick_left, null, true);
			function handleClick_left(evt) {
	            showDialogue(targetDialogue, 1);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);
			mid_rect.on("click", handleClick_mid, null, true);
			function handleClick_mid(evt) {
	            showDialogue(targetDialogue, 2);
	        }

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
			right_rect.on("click", handleClick_right, null, true);
			function handleClick_right(evt) {
	            showDialogue(targetDialogue, 3);
	        }
		}else if(state == 4){

		}else if (state == 5){

		}else if (state == 6){

		}
		
	}
	stage.addChild(textContainer);//adds textContainer to stage
	return;
}

function createText(string, x, y){
	var text = new createjs.Text(string, "20px Arial", "#ff7700");
	text.x = x;
	text.y = y;
	text.textBaseline = "alphabetic";
	return text;
}