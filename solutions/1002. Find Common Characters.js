/**
 * @param {string[]} words
 * @return {string[]}
 */
​
var commonChars = function(words) {
    var chars;
    const result = [];
    words = [...words.sort((a,b)=>b.length - a.length)];
    const countChars = (word, res = new Map()) => {
        for (const char of word) {
            res.has(char) && (!chars || chars.has(char)) ? 
                res.get(char)[0]++ : res.set(char, [1]);
        }
        return res;
    }
    chars = countChars(words.pop());
    const charCounts = words.map(word => countChars(word));
    for (let [char, count] of chars.entries()) {
        for (const word of charCounts) {
            if (word.has(char)) { count = Math.min(count, word.get(char)[0]) }
            else {
                count = 0;
                break;
            }
        }
        while (count--) { result.push(char) }
    }    
    return result;
};
