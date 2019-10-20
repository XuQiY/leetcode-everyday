/*
给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

    输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，
所以其长度为 3。
示例 2:

    输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，
所以其长度为 1。
示例 3:

    输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，
所以其长度为 3。
请注意， 你的答案必须是 子串 的长度， "pwke"
是一个子序列， 不是子串。
*/

//方法一：暴力法--遍历所有子串返回最大值
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var tmpStr = s[i]
        for (var j = i + 1; j < s.length; j++) {
            if (!tmpStr.includes(s[j])) tmpStr += s[j]
            else {
                break;
            }
        }
        max = max > tmpStr.length ? max : tmpStr.length

    }
    return max
};


//方法二 滑动窗口 当条件不满足时只要把队列的左边的元素移出直到满足题目要求
var lengthOfLongestSubstring1 = function(s) {
    let n = s.length;
    if (n === 0) return 0
    let max_len = 0;
    let cur_len = 0;
    let lookup = '';
    for (let i = 0; i < n; i++) {
        cur_len++;
        while (lookup.includes(s[i])) {
            lookup = lookup.substr(1);
            cur_len -= 1;
        }
        if (cur_len > max_len) max_len = cur_len;
        lookup += s[i]
    }
    console.log(max_len)
    return max_len

}

lengthOfLongestSubstring1('abcabcbb')