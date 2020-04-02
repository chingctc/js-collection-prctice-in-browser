'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElement = [];

  for(var a=0; a<collectionA.length; a++) {
    for(var key=0; key<collectionA[a].length; key++) {}
    var element = collectionA[a].key;
    var object = collectionB.value;

    for(var i=0; i<object.length; i++) {
      if (object.indexOf(element) >= 0) {
        sameElement.push(element);
        break;
      }
    }          
  }
  return sameElement;
}