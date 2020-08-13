/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1.数组排序
// 2.确定第一位数，双指针左右遍历其余两位数
// 3.返回最接近的数（与目标数之差绝对值最小的数）
var threeSumClosest = function (nums, target) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let closestNum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len - 2; i++) {
    let l = i+1,r=len-1
    while (l<r) {
      let res = nums[i] + nums[l] + nums[r]
      // console.log(res)
      if(Math.abs(closestNum-target)>Math.abs(res-target)){
        closestNum = res
      }
      if(res>target){
        r--
      }else if(res<target){
        l++
      }else{
        return res
      }
    }
  }
  return closestNum
};
// @lc code=end
