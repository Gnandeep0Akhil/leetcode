/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let targetSize = nums.length/2;
    for(i=0; i<nums.length; i++){
        let elem = nums[i];
        let count = 0;
        for(j=i; j<nums.length; j++){
            if(elem === nums[j]){
                count = count + 1;
            }
        }
        if(count >= targetSize){
            return elem;
        }
    }
};
