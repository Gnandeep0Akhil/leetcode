/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return inter(root, 0);
};
​
var inter = function (root, level) {
if(root){
    if( root.left === null && root.right === null ){
        return level+1;
    } else{
        return Math.max(inter(root.left, level+1), inter(root.right, level+1));
    }
}else{
    return null;
}
};
