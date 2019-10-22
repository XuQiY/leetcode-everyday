/**给定一个字符串 s， 找到 s 中最长的回文子串。 你可以假设 s 的最大长度为 1000。

*示例 1：
*输入: "babad"
*输出: "bab"
*注意: "aba"
*也是一个有效答案。

*示例 2：
*输入: "cbbd"
*输出: "bb"
*/
//一：暴力法，超时了尴尬。
function isPalindrome(s) {
    let n = s.length
    for (let i = 0, j = n - 1; i < j; i++) {
        if (s[i] != s[j]) return false
        else {
            j--;
        }
    }
    return true
}
var longestPalindrome = function(s) {
    let n = s.length;
    let res = s[0]
    if (n == 0) return ''
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp = ''
            if (isPalindrome(s.slice(i, j + 1))) {
                tmp = s.slice(i, j + 1)
                res = tmp.length > res.length ? tmp.slice() : res
            }
        }
    }
    console.log(res)

    return res;
};

longestPalindrome('aa')