let arr = [1,2,3,4,6,7]
let num = 6

;(function() {
    let temp = [...arr]
    let count = 1
    for (let i = 1; i < arr.length; i ++) {
        if (+arr[i - 1] + 1 === +arr[i]) {
            count++
        } else {
            if (count >= 3) {
                temp.splice(i-count, count, arr[i - count] + '-' + arr[i - 1])
            } 
            count = 1
        }
    }
    if (count && count >= 3) {
        temp.splice(temp.length-count, count, arr[num - count] + '-' + arr[num - 1])
    }
    console.log(temp.join(' '))
})()