/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const n = candidates.length
  let res = [];
  function helper(i, temp_sum, temp) {
    if(temp_sum>target || i ===n )return
    else if(temp_sum === target) {
      res.push(temp)
      return
    }
    helper(i, temp_sum + candidates[i], [...temp, candidates[i]])
    helper(i+1,temp_sum,temp)
  }
  helper(0, 0, []);
  return res
  console.table(res)
};

combinationSum([2, 3, 6, 7], 7);
// @lc code=end
