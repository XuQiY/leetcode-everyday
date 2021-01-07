/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      if(map.has(target-nums[i])){
        return [map.get(target-nums[i]),i]
      }
      else{
        map.set(nums[i],i)
      }
    }
    return []
};

 // @lc code=end

