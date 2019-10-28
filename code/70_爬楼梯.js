// 假设你正在爬楼梯。 需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。 你有多少种不同的方法可以爬到楼顶呢？

// 注意： 给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

/**
 * @param {number} n
 * @return {number}
 */
//方法一，暴力遍历。leetcode爆内存了。。。
var climbStairs = function(n) {
    if (n < 2) return 1
    let res = [1, 2]
    let end = []
    for (let i = 1; i <= n; i++) {
        let tmp = []
        res.forEach(num => {
            if (num + 2 <= n) {
                tmp.push(num + 2);
            }
            if (num + 1 <= n) {
                tmp.push(num + 1);
            } else end.push(num)
        })
        res = tmp.slice(0)
        if (res.length == 0) return end.length
    }
    // console.log(end)
    return res.length
};

//二 兔子数
var climbStairs2 = function(n) {
    if (n === 0) return n
    let res = Array(n).fill(0)
    res[1] = 1, res[2] = 2
    for (let i = 3; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    // console.log(res[n])
    return res[n]
}

climbStairs2(4)