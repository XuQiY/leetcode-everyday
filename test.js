// let res = [];
// let arr =['a','b','c','d','e','f'];
// arr.reduce((a,b)=>{
//   res.push(a+b)
//   return a+b
// })
// console.log(res)
function isPalindrome(str) {
  if(str === [...str].reverse().join('')) return true
  else return false
}

let str = 'abcdcbf';
let arr = []
for(let i = 0; i<str.length; i++) {
  let temp = str[i]
  for (let j = i+1; j < str.length; j++) {
    temp=temp+str[j]
    if(isPalindrome(temp)) arr.push(temp)  
  }
}
console.log(arr)