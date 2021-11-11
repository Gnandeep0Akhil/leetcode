/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var res = new Array();
    intervals.sort((a, b) => (a[0] - b[0]));
    var a, b = null;
    
    for (var i = 0; i < intervals.length; i++) {
        a = res[res.length - 1];
        b = intervals[i];
        if (overlap(a, b)) {
            a[0] = Math.min(a[0], b[0]);
            a[1] = Math.max(a[1], b[1]);
        } else {
            res.push([b[0], b[1]]);
        }
    }
​
  return res;
};
​
var overlap = function (a, b) {
  if (!a || !b) return false;
  if (b[0] <= a[1] && a[1] <= b[1]) return true;
  if (a[0] <= b[1] && b[1] <= a[1]) return true;
  return false;
};
