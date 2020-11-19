/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  for (let a = 1; a < 4; ++a)
    for (let b = 1; b < 4; ++b)
      for (let c = 1; c < 4; ++c)
        for (let d = 1; d < 4; ++d) {
          if (a + b + c + d == s.length) {
            let n1 = parseInt(s.substring(0, a));
            let n2 = parseInt(s.substring(a, a + b));
            let n3 = parseInt(s.substring(a + b, a + b + c));
            let n4 = parseInt(s.substring(a + b + c));
            if (n1 <= 255 && n2 <= 255 && n3 <= 255 && n4 <= 255) {
              let temp = [n1, n2, n3, n4].join('.');
              if(temp.length === s.length+3){
                res.push(temp)
              }
            }
          }
        }
  return res;
};
restoreIpAddresses("010010");
// @lc code=end
