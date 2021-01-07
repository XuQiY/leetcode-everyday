/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
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
  let romanMap = new Map()
  values.forEach((el,index) => {
    romanMap.set(reps[index],el)
  });
  let res = 0
  for (let i = 1; i <= s.length; i++) {
    let num = romanMap.get(s[i-1]+s[i])
    if(num){
      res += num
      i+=1
    }else{
      res += romanMap.get(s[i-1])
    }
  }
  return res
};
// @lc code=end

