/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i
  }
  return [-1, -1];
};
