/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];
  let temp = [];
  let travelTree = function (root, sum) {
    if (root === null) return;
    // temp += root.val
    temp.push(root.val);
    if (root.left === null && root.right === null && root.val === sum) {
      // console.log(temp);
      res.push(temp.slice());
    }
    travelTree(root.left, sum - root.val);
    travelTree(root.right, sum - root.val);
    temp.pop();
  };
  travelTree(root, sum);
  return res;
};
// @lc code=end
