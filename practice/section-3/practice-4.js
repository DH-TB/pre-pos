function create_updated_collection(collection_a, object_b) {
   var C = collection_c(collection_a);
   return newC(C,object_b);

}

	function collection_c(collection_a) {
    var same = [];
    collection_a.forEach(function (collection){
      var single = collection.split("-");
      var character = single[0];
      var num = parseInt(single[1]) || 1;
      same = Character(character, same, num);
    });
    return same;
}

function  Character(character,same,num) {
	if(character.length==0)
		{  same.push({key:character,count:num}); }
	else {
			for(var j = 0;j< same.length;j++) {
				if(character === same[j].key) {
					same[j].count+=num;
					break;
					}
				}
			if(j>=same.length)
			 { same.push({key:character,count:num}); }
		}
		return same;
}

function newC(collection_c,object_b) {
		for(var i=0;i<collection_c.length;i++) {
			for(var j=0;j<object_b.value.length;j++) {
		    	if(collection_c[i].key==object_b.value[j]) {
			    	if(collection_c[i].count>=3) {
				    	collection_c[i].count-=parseInt(collection_c[i].count/3);
				  }
			  }
		  }
	  }
	return collection_c;
}
