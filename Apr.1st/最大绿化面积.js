// let arr = [
//     [0, 0, 1, 0, 0, 0, 0, 1],

//     [0, 0, 0, 0, 0, 0, 0, 1],

//     [0, 1, 1, 0, 1, 0, 0, 0],

//     [0, 1, 0, 0, 1, 1, 0, 0],

//     [0, 0, 0, 0, 1, 1, 0, 0]
// ];
// let n = 5
// let m = 8


// function maxGreenArea(arr) {
//     let temp = new Array(n)
//     for(let i = 0; i < m; i ++) {
//         temp[i] = new Array(m).fill(0)
//     }
//     let max = 0
//     for (let i = 0; i < n; i ++) {
//         for (let j = 0; j < m; j ++) {
//             if (arr[i][j]) {
//                 let val = cal(arr, i, j)
//                 if (val > max) {
//                     max = val
//                 }
//             }
//         }
//     }
    
//     return max
    
//     function cal(arr, i, j) {
//         if (i >= n || j >= m) {
//             return 0
//         }
//         if (temp[i][j]) return 0
//         temp[i][j] = true
//         if (arr[i][j]) {
//             return cal(arr, i + 1, j) + 1 + cal(arr, i, j + 1)
//         }
//         return 0
//     }
// }

// maxGreenArea(arr)

function maxGreenArea(arr) {
    let temp = new Array(n)
    for(let i = 0; i < m; i ++) {
        temp[i] = new Array(m).fill(0)
    }
    let max = 0
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            if (arr[i][j]) {
                let val = cal(arr, i, j)
                if (val > max) {
                    max = val
                }
            }
        }
    }
    
    return max
    
    function cal(arr, i, j) {
        if (i >= n || j >= m) {
            return 0
        }
        if (temp[i][j]) return 0
        temp[i][j] = true
        if (arr[i][j]) {
            return cal(arr, i + 1, j) + 1 + cal(arr, i, j + 1)
        }
        return 0
    }
}
let firstLine = read_line().split(' ')
let n = firstLine[0]
let m = firstLine[1]
let arr = []
for (let i = 0; i < n; i ++) {
    arr.push(read_line().split(' '))
}
print(maxGreenArea(arr))