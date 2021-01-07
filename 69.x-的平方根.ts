/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x===1) {
    return 1
  }
    let l =0, r= x,res =0
    while(l<=r){
      let m = l+Math.floor((r-l)/2)
      if(x/m>=m){
        res = m
        l=m+1
      }else{
        r=m-1
      }
    }

    return res
};
// console.log(mySqrt(5));

// @lc code=end

