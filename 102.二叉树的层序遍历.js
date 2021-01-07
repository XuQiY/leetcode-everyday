/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
// var levelOrder = function (root) {
//   let res = [];
//   if (root === null) {
//     return res;
//   }
//   // 借助队列进行保存
//   let arr = [];
//   let levelSize = 0;
//   arr.push(root);
//   while (arr.length > 0) {
//     levelSize = arr.length;
//     res.push([]);
//     for (let i = 0; i < levelSize; i++) {
//       const node = arr.shift();
//       res[res.length - 1].push(node.val);
//       if (node.left !== null) arr.push(node.left);
//       if (node.right !== null) arr.push(node.right);
//     }
//   }
//   return res;
// };

var levelOrder = function (root){
  let res = []
  if (root===null) {
    return res 
  }
  travelTree(root,0,res)

  function travelTree(root,deep,res){
    if (!root) {
      return
    }
    if (deep>=res.length) {
      res.push([])
    }
    res[deep].push(root.val)
    travelTree(root.left,deep+1,res)
    travelTree(root.right,deep+1,res)
  }
  return res

}

// @lc code=end
