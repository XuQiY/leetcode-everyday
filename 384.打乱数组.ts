/*
 * @lc app=leetcode.cn id=384 lang=typescript
 *
 * [384] 打乱数组
 */

// @lc code=start
class Solution {
    nums:Array<number>
    constructor(nums: number[]) {
        this.nums=nums
    }

    reset(): number[] {
        return this.nums.slice()
    }

    shuffle(): number[] {
        let arr  = this.nums.slice()
        let res = []
        for (let i = arr.length; i >0; i--) {
            let index = Math.floor(Math.random()*i)
            res.push(arr[index])
            this.swap(arr,index,i-1)   
        }
        return res
    }
    swap(arr:Array<number>,a:number,b:number){
        let temp = arr[a]
        arr[a] = arr[b];
        arr[b] = temp
    }
}

// var nums = [1,2,3]
// var obj = new Solution(nums)
// var param_1 = obj.shuffle()
// var param_2 = obj.reset()
// var param_3 = obj.shuffle()


// console.log(param_1,param_2,param_3);


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

