// 给出 n 代表生成括号的对数， 请你写出一个函数， 使其能够生成所有可能的并且有效的括号组合。

// 例如， 给出 n = 3， 生成结果为：

// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return []
    let totla_l = []
    totla_l.push([null])
    totla_l.push(["()"])
    for (let i = 2; i < n + 1; i++) {
        let l = []
        for (let j = 0; j < i; j++) {
            const list1 = totla_l[j];
            const list2 = totla_l[i - 1 - j]
            for (let k1 of list1) {
                for (let k2 of list2) {
                    if (k1 == null) k1 = ""
                    if (k2 == null) k2 = ""
                    const el = "(" + k1 + ")" + k2
                    console.log("el:" + el + "\t" + "k1:" + k1 + "\t" + "k2:" + k2)
                    l.push(el)
                }
            }
        }
        totla_l.push(l)
    }
    console.table(totla_l)
    return totla_l[n]

};
console.log(generateParenthesis(3))