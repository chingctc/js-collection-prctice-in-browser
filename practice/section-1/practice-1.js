'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElement = [];

  for(var i=0; i< collectionA.length; i++) {
    var element = collectionA[i];
    if (collectionB.indexOf(element) >= 0) {
      sameElement.push(element);
    }
  }
  return sameElement;
}
