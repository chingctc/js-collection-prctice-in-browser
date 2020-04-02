'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var x;
  var y;
  var CollectionC = []
  for (x in collectionA){
    var exist = false;
    for (y in CollectionC){
      if(CollectionC[y].key==collectionA[x]){
        CollectionC[y].count=CollectionC[y].count+1;
        exist = true;
      }
    }
    if(!exist){
      CollectionC.push({key:collectionA[x],count:1});
    }
  }

  var m;
  var n;
  for(m in CollectionC){
   for(n in objectB.value){
     if(CollectionC[m].key == objectB.value[n]){
       var minus=Math.floor(CollectionC[m].count/3);
       CollectionC[m].count=CollectionC[m].count-minus;
     }
   }
  }
  return CollectionC;
}