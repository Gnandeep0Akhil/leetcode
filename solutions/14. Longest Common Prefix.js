/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let temp = strs[0];
    let len = strs.length;
    let size = temp.length;
    let res = '';
    for (i = 0; i < size ; i++){
        let char = temp.charAt(i);
        let count = 1;
        for (j = 1; j < len; j++){
            let word = strs[j];
            if( word.charAt(i) === char ){
                count = count + 1;
            }
        }
        if ( count === len ){
            res = res.concat(char);
        } else {
            return res;
        }
    }
    return res;
};
