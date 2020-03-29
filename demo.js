function fn(n, m, flag = false) {
    if (n === 1) return 1
    if (n === 2) return 2
    
    if (n === m) {
        flag = true
    }
    return fn(n - 1) + fn(n - 2)
}

function fn2(n , m) {
    let arr = [1, 2]
    for (let i = 2; i < n; i++) {
        if (n === m + 1) {
            arr[i] = arr[i - 1]
        } else 
            arr[i] = arr[i - 1] + arr[i - 2]
    }
}