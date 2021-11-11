/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var forward = null; var reverse = null;
    var form = head; var loop = head;
    var temp = null;
    while (loop && loop.next) {
        loop = loop.next.next;
        temp = form.next;
        form.next = forward;
        forward = form;
        form = temp;
    }
    reverse = loop ? form.next : form;
    while (forward && reverse) {
        if (forward.val !== reverse.val) return false;
        forward = forward.next;
        reverse = reverse.next;
    }
    return true;
};
