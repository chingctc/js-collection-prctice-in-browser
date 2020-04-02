'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElement = [];

  for(var a=0; a<collectionA.length; a++) {
    var element = collectionA[a];

    for(var b=0; b<collectionB.length; b++) {
      for(var i=0; i<collectionB[b].length; i++) {
        if (collectionB[b].indexOf(element) >= 0) {
          sameElement.push(element);
          break;
        }
      }          
    }
  }
  return sameElement;
}