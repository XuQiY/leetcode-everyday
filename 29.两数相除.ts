/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 * 1.都是正数
 * 2.都是负数
 * 3.一正一负
 * 4.是否越界
 * 5.是否为0
 */

// @lc code=start
// function divide(dividend: number, divisor: number): number {
//   let negativeFlag = false;
//   if (dividend < 0 && divisor < 0) {
//     negativeFlag = false;
//   } else if (dividend > 0 && divisor > 0) {
//     negativeFlag = false;
//   } else negativeFlag = true;
//   let count =0,a=Math.abs(dividend),b=Math.abs(divisor)
//   while(a>=b){
//     // console.log(`${a}-2`)
//     a-=b;
//     count++
//   }
//   // console.log(count, negativeFlag)
//   const res = negativeFlag?(0-count):count;
//   if(res > 2**31-1) return 2**31-1
//   else if(res <-(2**31)) return -(2**31)
//   else return res
// }
const MAX_NUM = 2 ** 31 - 1;

function divide(dividend: number, divisor: number): number {
  let flag = 0;
  // 边界处理
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 1) {
    if (divisor < MAX_NUM) return dividend;
    else return MAX_NUM;
  }

  // 正负数处理
  if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
    flag = 1;
  } else {
    flag = -1;
  }
  let a = dividend;
  let b = divisor;
  a = a > 0 ? a : -a;
  b = b > 0 ? b : -b;
  let res = div(a, b);
  if (flag > 0) return res > MAX_NUM ? MAX_NUM : res;
  return -res;

  function div(a:number, b:number):number {
    if (a < b) return 0;
    let count = 1;
    let tb = b; // 在后面的代码中不更新b
    while (tb + tb <= a) {
      count = count + count; // 最小解翻倍
      tb = tb + tb; // 当前测试的值也翻倍
    }
    return count + div(a - tb, b);
  }
}

// console.log(divide(7,-3))
// @lc code=end
