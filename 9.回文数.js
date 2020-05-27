/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
//方法一，转换为字符串，开辟了额外空间，效果不好
// var isPalindrome = function(x) {
//   let str = x + '';
//   let n = str.length;
//   for (let i = 0,j= n-1; i < j; i++,j--) {
//     if(str[i]!==str[j]) return false
//   }
//   return true
// };

//方法二，求余
var isPalindrome = function(x) {
  if(x<0) return false;
  let ret = 0;
  const temp = x
  while(x>0){
    ret = ret*10 + x%10
    x=Math.floor(x/10)
  }
  return temp === ret
};

isPalindrome(12156)
// @lc code=end

