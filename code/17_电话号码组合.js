// 给定一个仅包含数字 2 - 9 的字符串， 返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（ 与电话按键相同）。 注意 1 不对应任何字母。

//     输入： "23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

var letterCombinations = function(digits) {
    if (!digits) return []
    let letters = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]

    let tmp = digits.split('').map(d => letters[d - 2])
    let result = tmp.reduce((x, y) => {
        let tmp = [];
        x.forEach(i => {
            y.forEach(j =>
                tmp.push(i + j))
        })
        return tmp
    })

    return result
}
letterCombinations('233');