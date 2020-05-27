/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  digits[len-1]+=1;
  // if(digits[len-1]!=10) return digits;
  for (let i = len-1; i >= 0; i--) {
    if(digits[i]===10) 
    {
      digits[i] = 0;
      if (i-1<0) {
        digits.unshift(1);
      }
      else digits[i-1]+=1;
    }
    else{
      break;
    }
    
  }
  return digits;
};
console.log(plusOne([9,9]))
// @lc code=end

