var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 迭代
let flatten = (arr)=>{
  return arr.reduce((flat,toFlat)=>{
    return flat.concat(Array.isArray(toFlat)?flatten(toFlat):toFlat)
  },[])
}

// 递归
let res = []
let flatten2 = (arr)=>{
  if(Array.isArray(arr)){
    arr.forEach(v=>flatten2(v))
  }else{
    res.push(arr)
  }
}

// flat
res.flat(Infinity)
console.log(res)


flatten2(arr)
console.log(flatten(arr))
console.log(res)

