/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
// 方法一，先层序遍历再递归
// var pathSum = function (root, sum) {
//   let res = 0;
//   if (root === null) {
//     return res;
//   }
//   function helper(root, sum) {
//     if (!root) return;
//     if (root.val === sum) {
//       res += 1;
//     }
//     helper(root.left, sum - root.val);
//     helper(root.right, sum - root.val);
//   }

//   let queqe = []
//   queqe.push(root)
//   while (queqe.length>0) {
//     for (let i = 0; i < queqe.length; i++) {
//       let node = queqe.shift()
//       helper(node,sum)
//       if(node.left) queqe.push(node.left)
//       if(node.right) queqe.push(node.right)
//     }
//   }
//   return res
// };
var pathSum = function (root, sum) {
  let res = 0;
  if (root === null) {
    return res;
  }
  let map = new Map();
  let curentSum = 0;
  map.set(0, 1);

  function helper(root) {
    if (!root) return;
    curentSum += root.val;
    let remainCount = map.get(curentSum - sum)
    if (remainCount && remainCount > 0) {
      res += remainCount;
    }
    let count = map.get(curentSum);
    if (!count) {
      map.set(curentSum, 1);
    } else {
      map.set(curentSum, count + 1);
    }
    helper(root.left);
    helper(root.right);
    map.set(curentSum, map.get(curentSum) - 1);
    curentSum -= root.val;
  }
  helper(root, curentSum);
  return res;
};
// @lc code=end
