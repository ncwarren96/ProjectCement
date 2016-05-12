
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
		if(state == 1){
			console.log("1!");
			//text to draw
			var text = createText("Hello World", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick, null, true);
			function handleClick(evt) {
	            showDialogue(targetDialogue, 2);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
		}else if(state == 2){
			console.log("2!");
			//text to draw
			var text = createText("Test2", 20, 25);
			textContainer.addChild(text);

			var left_rect = new createjs.Shape();
			left_rect.graphics.beginFill("#FF0000").drawRect(10, 100, 50, 50);
			textContainer.addChild(left_rect);
			//left_rect.addEventListener("click", showDialogue(targetDialogue, 2));
			left_rect.on("click", handleClick, null, true);
			function handleClick(evt) {
	            alert("clicked left_rect!");
	            showDialogue(targetDialogue, 3);
	        }
		    

			var mid_rect = new createjs.Shape();
			mid_rect.graphics.beginFill("#FF0000").drawRect(220, 100, 50, 50);
			textContainer.addChild(mid_rect);

			var right_rect = new createjs.Shape();
			right_rect.graphics.beginFill("#FF0000").drawRect(440, 100, 50, 50);
			textContainer.addChild(right_rect);
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