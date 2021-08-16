/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let positions = [];
    let count = 0;
    for(i=0; i<nums.length; i++){
        if(nums[i] == target){
            count = count + 1;
            positions.push(i);
        }
    }
    if(count == 0){
        return [-1,-1];
    } else {
        return [positions[0],positions[positions.length-1]];
    }
};
