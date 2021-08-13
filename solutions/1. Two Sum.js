/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = nums.length;
    for(i=0; i<l; i++){
        for(j=i+1; i<j<l; j++){
            if(nums[i]+ nums[j] === target){
                return [i, j];
            }
        }
    }
};
