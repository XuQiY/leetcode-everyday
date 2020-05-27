/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 方法一：暴力法超时了
// var longestPalindrome = function (s) {
//   if(s.length===0) return ''
//   if(s.length===1) return s
//   let res = s[0];
//   function isPalindrome(str) {
//     if (str === [...str].reverse().join('')) return true;
//     else return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     let temp = s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       temp = temp + s[j];
//       if (temp.length > res.length && isPalindrome(temp)) res = temp;
//     }
//   }
//   return res
// };
// 方法二：中心扩展法
function longestPalindrome(s) {
  if (s == null || s.length < 1) return "";
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
      // 分两种情况，一是单数两边扩散，如aba，二是双数两边扩散abba
      let len1 = expandAroundCenter(s, i, i);
      let len2 = expandAroundCenter(s, i, i + 1);
      //取两者之中最大值
      let len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - (len - 1) / 2;
          end = i + len / 2;
      }
  }
  return s.substring(start.toFixed(), parseInt(end + 1));
}

function expandAroundCenter(s, left,right) {
  let L = left, R = right;
  while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
      L--;
      R++;
  }
  return R - L - 1;   // 返回左右两值间隔
}

console.log(longestPalindrome('babbad'))
// @lc code=end
