// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = '';

  if (obj === null) { return 'null'; }
  if (typeof obj === 'number') { return obj.toString(); }
  if (typeof obj === 'boolean') { return obj.toString(); }
  if (typeof obj === 'string') { return '\"' + obj + '\"'; }
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      var result = [];
      _.each(obj, function(item) {
        result.push(stringifyJSON(item));
      });

      return '[' + result.join(',') + ']';
    } else {
      var resultObj = [];
      for (var keys in obj) {
        if (obj[keys] === undefined || typeof obj[keys] === 'function') {
          continue;
        }
        resultObj.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]));
      }
      return '{' + resultObj.join(',') + '}';
    }
  }
};
