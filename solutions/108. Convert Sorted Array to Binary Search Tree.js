/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return inter(nums, 0, nums.length-1);
};
​
var inter = function(nums, ll, rr){
    if(ll > rr){
        return null;
    } else{
        var mid = Math.ceil((ll+rr)/2);
        var node = new TreeNode(nums[mid]);
        node.left = inter(nums, ll, mid-1);
        node.right = inter(nums, mid+1, rr);
        return node;
    }
}
