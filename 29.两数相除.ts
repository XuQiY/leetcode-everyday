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
function divide(dividend: number, divisor: number): number {
  let negativeFlag = false;
  if (dividend < 0 && divisor < 0) {
    negativeFlag = false;
  } else if (dividend > 0 && divisor > 0) {
    negativeFlag = false;
  } else negativeFlag = true;
  let count =0,a=Math.abs(dividend),b=Math.abs(divisor)
  while(a>=b){
    // console.log(`${a}-2`)
    a-=b;
    count++
  }
  // console.log(count, negativeFlag)
  const res = negativeFlag?(0-count):count;
  if(res > 2**31-1) return 2**31-1
  else if(res <-(2**31)) return -(2**31)
  else return res
}
// console.log(divide(7,-3))
// @lc code=end
