/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  if (root===null) {
    return res
  }
  let arr =[]
  let levelDepth = 0
  arr.push(root)
  while (arr.length>0) {
    res.unshift([])
    levelDepth = arr.length
    for (let i = 0; i < levelDepth; i++) {
      const node = arr.shift()
      res[0].push(node.val)
      if(node.left!==null) arr.push(node.left)
      if(node.right!==null) arr.push(node.right)
    }
  }
  return res
};
// @lc code=end

