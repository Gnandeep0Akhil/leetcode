/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const letterCounter = {}
​
  for(let j = 0; j < s.length; j++) {
    if(letterCounter[s[j]]) letterCounter[s[j]]++
    else letterCounter[s[j]] = 1
  }
​
  for( let i = 0; i < s.length; i++) {
    const stringLetter = s[i]
​
    if (letterCounter[stringLetter] === 1) {
        return i
    }
  }
​
  return -1
};
