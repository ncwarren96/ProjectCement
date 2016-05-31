//name is a string
function map(name){
	this.name = name;
	this.map_Objects = [];
}

function loadMap(currMapName, nextMapName, bg_url_nextMap, bg_hitbox_nextMap){
	saveMap(currMapName);
	stage.removeAllChildren();
	bmp.image.src = bg_url_nextMap;
	bmp_1.image.src = bg_hitbox_nextMap;
	var nextMap = getMap(nextMapName);
	for(var iter = 0; iter < nextMap.map_Objects.length;iter++){
		stage.addChild(nextMap.map_Objects[iter]);
	}
	currentMapName = nextMapName;
}

function saveMap(name){
	var updateMap = getMap(name);
	updateMap.map_Objects = [];
	for(var iter = 0; iter < stage.numChildren;iter++){
		updateMap.map_Objects.push(stage.getChildAt(iter));
	}
}

function getMap(name){
	for(var iter = 0; iter < map_array.length;iter++){
		var mapCheck = map_array[iter];
		if(mapCheck.name == name){
			return mapCheck;
		}
	}
	console.log("No map called " + name + " found.");
	return null;
}
