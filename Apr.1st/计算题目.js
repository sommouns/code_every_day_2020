function sumInteger() {
    let str = '1 1 1'
    let arr = str.split(' ')
    
    let obj = new Map()
    for (let i = 0; i < arr.length - 1; i ++) {
        for (let j = i + 1; j < arr.length; j ++) {
            obj.set(+arr[i] + +arr[j], true)
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (obj.get(+arr[i])) {
            return true
        }
    }
    return false;
}

sumInteger()