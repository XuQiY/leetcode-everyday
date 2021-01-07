// 快速排序实现
// function quickSort(arr) {
//   if(arr.length<=1) return arr;
//   let part = arr[0]
//   const left=[],right=[]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i]<part) {
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }    
//   }
//   return [...quickSort(left),part,...quickSort(right)]
// }

function mergeSort(arr) {
  if (arr.length<2) {
    return arr
  }

  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
  let i = 0
  let j = 0
  const result = []

  while (i<left.length&&j<right.length) {
    if (left[i]>right[j]) {
      result.push(left[i++])
    }else{
      result.push(right[j++])
    }
  }

  return [...result,...left.slice(i),...right.slice(j)]
}


let arr = [1,22,12,13,5,8,21];
console.log(mergeSort(arr));