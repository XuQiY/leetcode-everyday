/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一 栈：使用数组模拟栈太耗性能
// var isValid = function(s) {
//   let stack = []
//   for (let i = 0; i < s.length; i++) {
//     if(s[i]==='}'&&stack[stack.length-1]==='{') stack.pop();
//     else if(s[i]===']'&&stack[stack.length-1]==='[') stack.pop();
//     else if(s[i]===')'&&stack[stack.length-1]==='(') stack.pop();
//     else stack.push(s[i]);
//   }
//   return stack.length===0;
// };
//方法二： replace替换
var isValid = function(s) {
  let flag = s.length / 2
  if(s.length%2!==0) return false
  while (s&&flag) {
    s = s.replace('()','');
    s = s.replace('{}','');
    s = s.replace('[]','');
    flag-=1
  }
  return s === '';
};

// isValid('{}[{}]{}[]')
// @lc code=end

