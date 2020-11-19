/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
// 方法一，暴力填充法
// function compareVersion(version1: string, version2: string): number {
//   const v1 = version1.split('.')
//   const v2 = version2.split('.')

//   // 填充数组
//   let len = Math.abs(v1.length-v2.length)
//   if(v1.length>v2.length) {
//     for(let i =0;i<len;i++){
//       v2.push('0')
//     }
//   } else{
//     for(let i =0;i<len;i++){
//       v1.push('0')
//     }
//   }

//   // 数组比较
//   for (let i = 0; i < v1.length; i++) {
//     if(parseInt(v1[i])>parseInt(v2[i])){
//       return 1
//     }
//     else if(parseInt(v1[i])<parseInt(v2[i])){
//       return -1
//     }
//     else if(parseInt(v1[i])== parseInt(v2[i])&&i==v1.length-1){
//       return 0
//     }
//   }
//   return -1
// }

// 方法二， 数字比较法
function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const pow = Math.max(v1.length,v2.length)
  let sum1=0,sum2=0;
  for(let i =0;i<v1.length;i++){
    sum1+=parseInt(v1[i])*(10**(pow-i))
  }
  for(let i =0;i<v2.length;i++){
    sum2+=parseInt(v2[i])*(10**(pow-i))
  }
  return sum1>sum2?1:sum1==sum2?0:-1
}

// console.log(compareVersion('7.5.2.4', '7.5.3'));
// @lc code=end
