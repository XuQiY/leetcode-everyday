/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) return root
  let right = root.right
  root.right = root.left
  root.left = right
  root.left = invertTree(root.left)
  root.right = invertTree(root.right)
  return root
};
// @lc code=end

