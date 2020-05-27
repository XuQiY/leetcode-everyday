// 快速排序实现
function quickSort(arr) {
  if(arr.length<=1) return arr;
  const midNum = Math.floor(arr.length/2)
  const mid = arr[midNum];
  console.log(mid)
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<mid) left.push(arr[i]);
    else if(arr[i]>mid) right.push(arr[i]);
  }
  console.log(left,right)
  return[...quickSort(left),mid, ...quickSort(right)]
}

let arr = [1,22,12,13,5,8,21];
console.log(quickSort(arr));