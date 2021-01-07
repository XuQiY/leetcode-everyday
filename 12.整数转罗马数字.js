/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**  暴力法
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   function helper(num, a, b, c) {
//     if (num === 4) {
//       return a + b;
//     }
//     if (num === 9) {
//       return a + c;
//     }
//     if (num < 4) {
//       return a.repeat(num);
//     }
//     if (num < 9) {
//       return b + a.repeat(num-5);
//     }
//   }

//   let romanArr = [
//     ['I', 'V', 'X'],
//     ['X', 'L', 'C'],
//     ['C', 'D', 'M'],
//     ['M', 'M', 'M'],
//   ];
//   let i = 0;
//   let reslut = '';
//   while (num > 0) {
//     reslut = helper(num % 10, ...romanArr[i]) + reslut;
//     num = Math.floor(num / 10);
//     i++;
//   }
//   return reslut
// };
/**贪心法
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let reps = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let res = '';
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += reps[i];
    }
  }
  return res;
};
// @lc code=end
