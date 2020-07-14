/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0
    let arr = []
    for (let i = 0; i < m; i++) {
        arr.push(new Array(n).fill(0))
    }
    let recusive = function(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || arr[i][j] || !isValid(i, j, k)) return
        count ++
        arr[i][j] = 1
        recusive(i - 1, j)
        recusive(i + 1, j)
        recusive(i, j - 1)
        recusive(i, j + 1)
    }
    recusive(0, 0)
    return count
};

function isValid(i, j, k) {
    let temp = ('' + i).split('').concat(('' + j).split(''))
    let res = 0
    for (let val of temp) {res += +val}
    return res <= k
}

movingCount(3, 2, 17)