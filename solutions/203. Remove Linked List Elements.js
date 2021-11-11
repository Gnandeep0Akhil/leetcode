/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var helper = new ListNode(0);
    helper.next = head;
    var p = helper;
    while(p.next !== null){
        if(p.next.val == val){
            var next = p.next;
            p.next = next.next;
        }else{
            p = p.next
        }
    }
    return helper.next;
};
