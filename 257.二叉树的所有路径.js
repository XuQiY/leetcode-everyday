/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = []
  if(root===null) return res
  const helper = (root,str)=>{
    if(root===null) return
    if(!root.left&&!root.right){
      str += root.val
      res.push(str)
    }
    str += root.val + '->'
    helper(root.left,str)
    helper(root.right,str)
  }
  helper(root,'')
  return res
};
// @lc code=end

