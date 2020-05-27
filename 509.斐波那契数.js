/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
//方法一： 递归，内存消耗太大
// var fib = function(N) {
//   if(N===1) return 1
//   if(N===0) return 0
//   // console.log(N)
//   return fib(N-1)+fib(N-2)
// };
//方法二： 循环
var fib = function(N) {
  let sum = 0,left = 1,right = 1
  if(N===0) return 0
  if(N===1&&N===2) return 1
  for (let i = 2; i < N; i++) {
    temp = left
    left = right
    right = right + temp 
  }
  return right
};
fib(4)
// @lc code=end

