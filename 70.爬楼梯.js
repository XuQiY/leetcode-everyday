/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 方法一 递归，炸裂超时

// var climbStairs = function(n) {
//   if(n===1) return 1
//   if(n===2) return 2
//   return climbStairs(n-1) + climbStairs(n-2)
// };

// 方法二 递归，加入哈希表

let hash = new Map()
var climbStairs = function(n) {
  if(n===1) return 1;     
  if(n===2) return 2;
  if(hash.has(n)) return hash.get(n);    // 如果hash表中有，则返回
  let ret = climbStairs(n-1) + climbStairs(n-2);
  hash.set(n,ret)   // 值存入hash表
  return ret
};

// 方法三  累加法
// var climbStairs = function(n) {
//   if(n===1) return 1;
//   if(n===2) return 2;
//   let first = 1;
//   let second = 2; 
//   for (let i = 3; i <= n; i++) {
//     second = first + second;
//     first = second -first
//     // console.log(first,second)
//   }
//   return second
// };
console.log(climbStairs(45),hash)
// @lc code=end

