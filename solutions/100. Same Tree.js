/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {    
    return isSameNode(p, q);
};
​
var isSameNode = function(p, q) {
    if(p && q){
        if( p.val === q.val ){
            return (p.val === q.val) && ( isSameNode(p.left, q.left) && isSameNode(p.right, q.right));
        } else{
            return false;
        }
    } else if(p || q){
        return false;
    } else{
        return true;
    }
}
