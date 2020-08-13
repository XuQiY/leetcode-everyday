/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n == 0) return 1;
  // n是偶数情况
  else if (n > 0 && n % 2 == 0) return myPow(x * x, n / 2);
  // n是奇数情况
	else if (n > 0) return myPow(x, n - 1) * x;
	else return 1 / myPow(x, -n);
};

myPow(2.00000,10)
// @lc code=end

