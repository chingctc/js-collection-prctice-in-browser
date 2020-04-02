'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let sameElement = [{
    key: String,
    count: Number
  }];

  for(var a=0; a<collectionA.length; a++) {
    var element = collectionA[a].key;
    var cnt = collectionA[a].count;
    var object = objectB.value;

      for(var i=0; i<object.length; i++) {
        if (object.indexOf(element) >= 0) {
          sameElement.push({key: element, count: cnt-1});
          break;
        } else {
          sameElement.push({key: element, count: cnt});
          break;
        }
    }
  }
  const array = sameElement.shift();
  return sameElement;
}
