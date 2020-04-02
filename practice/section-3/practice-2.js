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
    var minus = parseInt(cnt/3);

      for(var i=0; i<object.length; i++) {
        if (object.indexOf(element) >= 0 && cnt >=3) {
          sameElement.push({key: element, count: cnt-minus});
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
