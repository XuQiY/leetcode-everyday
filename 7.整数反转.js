/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 方法一反转字符串
// var reverse = function(x) {
//   const tmp = parseInt([...String(x)].reverse().join(''))
//   if(tmp>2**31-1) return 0
//   if(x<0)   return 0-tmp
//   return tmp
// };

// 方法二 求余法
var reverse = function(x) {
  let temp = 0
  while(x!=0){
    temp = temp * 10 + x % 10
    x = parseInt(x / 10)
  }
  if(temp > 2**31-1 || temp < 0-(2**31-1)) return 0
  else return temp
};
console.log(reverse(123))

// @lc code=end

