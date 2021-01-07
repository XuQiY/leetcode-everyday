/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
/** 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//   let res =[]
//   if(!root) return res
//   let inOrder=root=>{
//     if(root===null)return;
//     res.push(root.val)
//     inOrder(root.left)
//     inOrder(root.right)
//   }
//   inOrder(root)
//   return res
// };

/** 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  let pre = null;
  while (root || stack.length > 0) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right
  }
  return res;
};
// @lc code=end
