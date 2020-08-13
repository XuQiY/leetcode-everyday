/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if(parseInt(str)>=2**31) return 2**31-1
  else if(parseInt(str)<=-(2**31)) return (-(2**31))
  else return parseInt(str)?parseInt(str):0
};
// console.log(parseInt("   -42"))
// @lc code=end

