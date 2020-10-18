// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var elementList = [];

  var getElementsByClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementList.push(element);
    }

    if (element.childNodes) {
      _.each(element.childNodes, function(childs) {
        getElementsByClass(childs);
      });
    }
  };

  getElementsByClass(document.body);
  return elementList;
};
