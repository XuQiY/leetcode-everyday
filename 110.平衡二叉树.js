/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }
  if (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  ) {
    return true;
  }

  function height(root) {
    if (root === null) {
      return 0;
    }
    let left = height(root.left);
    let right = height(root.right);
    return Math.max(left, right) + 1;
  }
  return false
};
// @lc code=end
