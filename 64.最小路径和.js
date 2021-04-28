/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  let col = grid[0].length;
  let row = grid.length;
  let dp = [];
  for (let i = 0; i < row; i++) {
    dp.push([]);
    for (let j = 0; j < col; j++) {
      dp[i].push([]);
    }
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[row - 1][col - 1];
};
// @lc code=end
