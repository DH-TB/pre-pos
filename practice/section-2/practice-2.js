function count_same_elements(collection) {
  var same = [];
  collection.forEach(function (collection){
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
