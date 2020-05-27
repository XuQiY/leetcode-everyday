/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法一：暴力法超时

// var threeSum = function(nums) {
//   let res = []
//   let set = new Set()
//   nums.sort((a,b)=>a-b)
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i]>0) break
//     for (let j = i+1; j < nums.length; j++) {
//       for (let z = j+1; z < nums.length; z++) {
//         if((nums[i]+nums[j]+nums[z])===0)res.push([nums[i],nums[j],nums[z]])
//       }
//     } 
//   }
//   res.forEach(item => {
//     set.add(JSON.stringify(item))
//   })
//   return [...set].map(a=>JSON.parse(a))
// };
//方法二：二路归并
/**
 * 1:数组先排序
 * 2:取最小的值nums[i]开始，如果nums[i]>0 返回
 * 3.取左边第一个值和右边第一个值，如果其三数和为0则为解，
 * 如果其和小于0则L++，大于0则R++
 * 4.去重，因数组有序，则nums[i]前后值
 * 
 */
var threeSum = function(nums) {
  let res = []
  nums.sort((a,b)=>a-b)
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if(nums[i]>0)break
    if(nums[i]===nums[i-1]) continue
    let L = i + 1
    let R = len -1
    while(L<R){
      const sum = nums[i] + nums[L] + nums[R]
      if(sum === 0){
        res.push([nums[i],nums[L],nums[R]])
        while(L<R&&nums[L]===nums[L+1]) L++
        while(L<R&&nums[R]===nums[R-1]) R--
        R--
        L++
      }
      if(sum>0) R--
      if(sum<0) L++
    }
  }
  return res
}
;

console.log(threeSum([-1,0,1,2,-1,-4]))
// @lc code=end

