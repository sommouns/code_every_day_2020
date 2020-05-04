function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null
    }
    return recusive(preorder, inorder)
    function recusive(preOrder, inOrder) {
        if (preOrder.length === 1) {
            return new TreeNode(preOrder[0])
        }
        let head = preOrder[0]
        let leftNextInOrder = inOrder.slice(0, inOrder.findIndex(n => n === head))
        let leftNextPreOrder = preOrder.slice(1, 1 + leftNextInOrder.length)
        let rightNextInOrder = inOrder.slice(inOrder.findIndex(n => n === head) + 1)
        let rightNextPreOrder = preOrder.slice(preOrder.length - rightNextInOrder.length)
        let node = new TreeNode(head)
        node.left = leftNextInOrder.length && recusive(leftNextPreOrder, leftNextInOrder) || null
        node.right = rightNextInOrder.length && recusive(rightNextPreOrder, rightNextInOrder) || null
        return node
    }
};

const res = buildTree([1, 2], [2, 1])
debugger