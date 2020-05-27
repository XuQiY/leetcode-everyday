/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//方法一：暴力递归法，超时
// var lastRemaining = function(n) {
//   let arr = []
//   for(let i =1; i <= n; i++)
//   { 
//     arr.push(i)
//   }
//   // console.log(arr)

//   while (arr.length > 1) {
//     // 先左遍历
//     arr = arr.filter((item,index)=>index%2!==0)
//     // console.log(arr,'left')
//     if(arr.length===1)  break
//     // 右遍历
//     //1.偶数长度去除下标为奇数的
//     //2.奇数去除下标为偶数的
//     if(arr.length%2 === 0) arr = arr.filter((item,index)=>index%2===0)
//     else arr = arr.filter((item,index)=>index%2!==0)
//     // console.log(arr,'right')

//   }
//   return arr
// };
// lastRemaining(0)

//方法二：找规律
var lastRemaining = function(n) {
  //我们只需要记住每次删除数字后开头的数字是几就可以了
  let flag = false;//false表示从左往右，true表示从右往左
  let res = 1;
  let step = 1;
  let num = n;//剩下数字的个数
  while(res+step<=n){
      if(num%2===0){ res = flag===false?(res+step):res; }//剩下偶数个数字
      else{//剩下奇数个数字
          res +=step;
      }
      step = step*2;//更新步长
      flag = !flag;//更新删除方向
      //更新剩下数字的个数
      num = Math.floor(num/2);
  }
  return res;
};

// @lc code=end

