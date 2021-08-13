/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var arg = num; 
    while (arg.toString().length > 1){
        var sum = 0;
        for(i=0; i<arg.toString().length; i++){
            sum = sum + parseInt(arg.toString().charAt(i));
        }
        arg = sum;
    }
    return arg;
};
