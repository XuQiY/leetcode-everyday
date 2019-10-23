// 给定一个没有重复数字的序列， 返回其所有可能的全排列。

// 示例:

//     输入: [1, 2, 3]
// 输出: [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//方法一:暴力法
var permute = function(nums) {
    let arr = nums.map(n => [n]) //初始化arr
    if (arr.length < 2) return arr //长度小于2 直接返回
    console.log(arr)
    for (let i = 1; i < nums.length; i++) {
        let tmp = []
        for (let j = 0; j < nums.length; j++) {
            arr.forEach(n => {
                if (n.indexOf(nums[j]) == -1) tmp.push([nums[j], ...n])
            })
        }
        arr = [...tmp]
        console.log(tmp)
    }
    // console.log(arr)
    return arr
};

//方法二：回溯法，减少重复判断以示例输入: [1, 2, 3] 为例，因为是排列问题，
// 只要我们按照顺序选取数字，保证上一层选过的数字不在下一层出现，就能够得到不重不漏的所有排列。
// 说明： 这里“ 保证上一层选过的数字不在下一层出现” 的意思是我们手写的时候， 后面选的数字一定不能是前面已经出现过的。
// 为了做到这一点，我们得使用一个数组长度这么长的额外空间， 记为数组 used， 只要“ 上一层” 选了一个元素，
// 我们就得“ 标记一下”，“ 表示占位”。

/**
 * @param {number[]} nums 判断的数组
 * @param {number} index 当前下标
 * @param {number[]} tmp 中间数组变量
 * @param {number[]} used 是否使用过当前数
 * @param {number[]} res 返回结果
 * @return {number[][]}
 */
function dfs(nums, index, tmp, used, res) {
    //递归终止条件
    if (index === nums.length) {
        res.push([...tmp]);
        // console.log(res)
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        //如果没有用过它
        if (!used[i]) {
            used[i] = true;
            tmp.push(nums[i]);
            dfs(nums, index + 1, tmp, used, res);
            used[i] = false;
            tmp.pop()
        }
    }
}
var permute2 = function(nums) {
    if (nums.length === 0) return []
    let used = nums.map(i => false)
    res = []
    dfs(nums, 0, [], used, res)
    console.log(res)
    return res
}
permute2([1, 2, 3])