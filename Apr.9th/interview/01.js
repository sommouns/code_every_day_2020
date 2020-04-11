var locationList = [
    { id: 0, name: '中国' },
    { id: 1, pid: 0, name: '广东省' },
    { id: 2, pid: 1, name: '深圳市' },
    { id: 3, pid: 1, name: '广州市' },
];2
// 前提id有序的，而且前面的不会是后面的子城市
function buildLocationTree(locationList) {
    let res = []
    for (let i = 0; i < locationList.length; i++) {
        let obj = {
            id: locationList[i].id,
            name: locationList[i].name,
            subLocation: []
        }
        if (locationList[i].pid) {
            obj.pid = locationList[i].pid
            let parent = findParent(locationList[i].pid) // 因为对象是引用类型，所以直接可以拿来用
            if (parent) 
                parent.subLocation.push(obj)
            else 
                res.push(obj)
        } else {
            res.push(obj)
        }
    }
    function findParent(pid) {
        for(let i = 0; i < res.length; i++) {
            let stack = [res[i]]
            // 非递归先序遍历找出对应节点
            while(stack.length) {
                let root = stack.pop()
                if (root.id === pid) return root
                if (root.right) {
                    stack.push(root.right)
                }
                if (root.left) {
                    stack.push(root.right)
                }
            }
        }
        return false
    }
    return res
}
