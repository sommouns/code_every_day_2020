/**
 * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
 *
 * Example 1:
 * Input: 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 *
 * Input: 00000000000000000000000010000000
 * Output: 1
 * Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
 *
 * Input: 11111111111111111111111111111101
 * Output: 31
 * Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while(n) {
        if (n % 2) count ++
        n = Math.floor(n / 2)
    }
    return count
};


hammingWeight(7)


// 总结：送分题。toString(2)可以直接拿到