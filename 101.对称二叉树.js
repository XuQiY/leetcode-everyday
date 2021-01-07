/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function helper(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return (p.val == q.val) && helper(p.left, q.right) && helper(p.right, q.left);
  }
  return helper(root, root);
};
// @lc code=end
