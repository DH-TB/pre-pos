function create_updated_collection(collection_a, object_b) {
  
  var C = bulidCollection_c(collection_a);
   return newC(C,object_b);
}
	function bulidCollection_c(collection_a) {
		var same=[];
		for(var i = 0;i < collection_a.length;i++) {
			if(i==0)
				{  same.push({key:collection_a[i],count:1}); }
			else{
				for(var j = 0;j< same.length;j++)
					if(collection_a[i]==same[j].key) {
						same[j].count++;
						break;
						}
					}
				if(j>=same.length)
			   		{ same.push({key:collection_a[i],count:1}); }		
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
