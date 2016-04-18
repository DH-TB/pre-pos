function count_same_elements(collection) {
		var same = [];
		for(var i = 0;i < collection.length;i++) {
			character = collection[i];
			if(character.length > 1) {
				var single = character.split("");
				var num = 0;
				for(var k = 1;k < single.length;k++) {
					if(parseInt(single[k])>=0 && parseInt(single[k])<=9)
					num = num*10 + parseInt(single[k]);
				}
				character = single[0];
			 	same = Character(character,same,num);
			 }
			 else {
					num = 1;
					same = Character(character,same,num);
					}
		 }
	 return same;
}

function  Character(character,same,num) {
	if(character.length==0) {
		same.push({name:character,summary:num});
	}
	else {
			for(var j = 0;j< same.length;j++)	{
				if(character === same[j].name) {
					same[j].summary+=num;
					break;
					}
				}
			if(j>=same.length) {
				same.push({name:character,summary:num});
				}
		}
		return same;
}
