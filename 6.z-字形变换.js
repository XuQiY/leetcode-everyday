/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 方法一，按部就班法
var convert = function (s, numRows) {
  const len = s.length;
  if (len === 0) return '';
  if (len < numRows || numRows === 1) return s;
  let res = new Array(numRows);
  for (let i = 0; i < res.length; i++) {
    res[i] = [];
  }

  let temp = 0;
  let col = numRows - 1;
  for (let i = 0; i < len; i++) {
    if (temp < numRows) {
      res[temp].push(s[i]);
      temp++;
    } else if (temp === numRows && col > 1) {
      res[col - 1].push(s[i]);
      col--;
    } else if (col === 1) {
      col = numRows - 1;
      temp = 0;
      res[temp].push(s[i]);
      temp++;
    }
  }
  return res.reduce((x,y)=>{
    return x+y.join('')
  },'')
};
convert('LEETCODEISHIRING', 4);
// @lc code=end
