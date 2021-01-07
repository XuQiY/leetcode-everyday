/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let l =0;
  let r = nums.length-1;
  let res = []
  let lflag =0
  let rflag = 0
  while(l<=r&&(!lflag||!rflag)){
    if(nums[l]===target){
      res[0] = l
      lflag=1
    }else{
      l++
    }
    if(nums[r] === target){
      res[1] = r
      rflag=1
    }
    else{
      r--
    }
  }
  return res.length>0?res:[-1,-1]
};


// @lc code=end

