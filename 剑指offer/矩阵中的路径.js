/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let yLength = board[0].length - 1
    let xLength = board.length - 1
    for (let i = 0; i <= xLength; i ++) {
        for (let j = 0; j <= yLength; j++) {
            if (recusive(0, i, j)) return true
        }
    }

    return false
    function recusive(count, i, j) {
        if (i < 0 || j < 0 || i > xLength || j > yLength || word[count] !== board[i][j] || board[i][j] === '-') return false
        if (count === word.length - 1) return true

        let temp = board[i][j]
        board[i][j] = '-'
        let res = recusive(count + 1, i - 1, j) 
            || recusive(count + 1, i + 1, j)
            || recusive(count + 1, i, j - 1)
            || recusive(count + 1, i, j + 1)
        board[i][j] = temp
        return res
    }
}
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
,"ABCCED")