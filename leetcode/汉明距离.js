/**
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0
    let binX = x.toString(2).split('').reverse()
    let binY = y.toString(2).split('').reverse()
    if (binX.length < binY.length) {
        [binX, binY] = [binY, binX]
    }
    for(let i = 0; i < binX.length; i ++) {
        if (!binY[i]) binY[i] = "0"
        if (binX[i] !== binY[i]) {
            count ++
        }
    }
    return count
};


hammingDistance(1, 4)

// 总结：用抑或操作就可以知道有多少个不同了，考虑不够