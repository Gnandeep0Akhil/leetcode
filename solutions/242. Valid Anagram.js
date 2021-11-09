/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
​
var isAnagram = function(s, t) {
  var arr = Array(26);
  var index = 0;
​
  if (s.length !== t.length) return false;
​
  for (var i = 0; i < s.length; i++) {
    index = s[i].charCodeAt(0);
    if (!arr[index]) arr[index] = 0;
    arr[index]++;
  }
​
  for (var j = 0; j < t.length; j++) {
    index = t[j].charCodeAt(0);
    if (!arr[index]) return false;
    arr[index]--;
  }
​
  return true;
};
