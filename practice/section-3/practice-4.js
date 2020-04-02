'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var x;
  var y;
  var collectionC = []
  for (x in collectionA){
    var exist = false;
    var char;
    var cnt;
    if(collectionA[x].includes("-")){
      char=collectionA[x].substring(0,collectionA[x].indexOf("-"));
      cnt=parseInt(collectionA[x].substring(collectionA[x].indexOf("-")+1));
    }else{
      char=collectionA[x];
      cnt=1;
    }
    for (y in collectionC){
      if(collectionC[y].key==collectionA[x]){
        collectionC[y].count=collectionC[y].count+1;
        exist = true;
      }
    }
    if(!exist){
      collectionC.push({key:char,count:cnt});
    }
  }

  var m;
  var n;
  for(m in collectionC){
   for(n in objectB.value){
     if(collectionC[m].key == objectB.value[n]){
       var minus=Math.floor(collectionC[m].count/3);
       collectionC[m].count=collectionC[m].count-minus;
     }
   }
  }
  return collectionC;

}