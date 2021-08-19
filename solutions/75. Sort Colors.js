/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    var i, j;
    for (i = 0; i < n-1; i++){
        for (j = 0; j < n-i-1; j++){
            if (nums[j] > nums[j+1]){
                var temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
  
    }
};
