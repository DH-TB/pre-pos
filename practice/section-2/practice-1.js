 function count_same_elements(collection) {
	var same=[];
		for(var i = 0;i < collection.length;i++) {
			if(i==0)
				{  same.push({key:collection[i],count:1}); }
			else{
				for(var j = 0;j< same.length;j++)
					if(collection[i]==same[j].key) {
						same[j].count++;
						break;
						}
					}
				if(j>=same.length)
			   		{ same.push({key:collection[i],count:1}); }
		}
		return same;
	}
