/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //存储9宫格数字
  let box = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 9; i++) {
    let row = [];  //存储每一行
    let column = [];   // 存储每一列
    for (let j = 0; j < 9; j++) {
      let temp = board[i][j];    // 行[0][0~8] 
      if (temp !== '.') {
        // 九宫格
        if (box[Math.floor(j / 3) + Math.floor(i / 3) * 3].includes(temp))
          return false;
        box[Math.floor(j / 3) + Math.floor(i / 3) * 3].push(temp);
        if (row.includes(temp)) {
          return false;
        }
        row.push(temp);
      }

      temp = board[j][i];  // 列[0~8][0]
      if (temp !== '.') {
        if (column.includes(temp)) {
          return false;
        }
        column.push(temp);
      }
    }
    // console.log(column);
  }
  return true;
};
// isValidSudoku([
//   ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//   ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//   ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//   ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// ]);
// @lc code=end
