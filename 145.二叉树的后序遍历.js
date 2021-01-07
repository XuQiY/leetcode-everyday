/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
/**递归
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function(root) {
//     let res =[]
//     if(!root) return res;
//     let order = root=>{
//       if(!root) return;
//       order(root.left)
//       order(root.right)
//       res.push(root.val)
//     }
//     order(root)
//     return res
// };
/**迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if(!root) return []
  let stack =[]
  let res = []
  let pre = null
  while (root||stack.length!==0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if(!root.right||root.right===pre){
      pre = root
      res.push(root.val)
      root=null
    }else{
      stack.push(root)
      root = root.right
    }
  }
  return res
    
};
// @lc code=end

