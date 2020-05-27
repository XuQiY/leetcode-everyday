/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
//一：暴力法，过了但不理想
// var maxArea = function(height) {
//   let len = height.length;
//   let res = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i+1; j < len; j++) {  
//       let temp = Math.min(height[i],height[j])*(j-i);
//       if(res < temp)  res = temp
//     }
//   }
//   return res;
// };

//二： 暴力法优化
var maxArea = function(height) {
  let len = height.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    if(height[i]*len<res) continue;
    for (let j = i+1; j < len; j++) {  
      let temp = Math.min(height[i],height[j])*(j-i);
      if(res < temp)  res = temp
    }
  }
  return res;
};
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

