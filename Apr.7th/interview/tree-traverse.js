function Traverse(root) {
    let stack = [root]
    while(stack.length) {
        let top = stack[stack.length - 1] 
        console.log(top.val)
        stack.pop()
        if (top.right) {
            stack.push(top.right)
        }
        if (top.left) {
            stack.push(top.left)
        }
    }
}