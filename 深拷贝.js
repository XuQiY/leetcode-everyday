const ob1 = {
  name:'xu',
  age:18
}
// let ob2 = ob1
// let ob2 = Object.create(ob1)
// let ob2 =JSON.parse(JSON.stringify(ob1))
// function deepClone(ob,targetOb){
//   for (const i in targetOb) {
//     ob[i] = targetOb[i]
//   }
//   return ob
// }
// let ob2 = {}
// deepClone(ob2,ob1)
// ob2.score = 20
// console.log(ob1,ob2)

const a = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(),  // stringified
  undef: undefined,  // lost
  inf: Infinity,  // forced to 'null'
  re: /.*/,  // lost
  fun:function(params) {
    return params+1
  }
}


// let deepClone = function (obj) {
//   let copy
//   if(obj===null || typeof obj !=='object'){
//     return obj
//   }
//   if(obj instanceof Date){
//     copy = new Date()
//     copy.setTime(obj.getTime())
//     return copy
//   }
//   if(obj instanceof Array){
//     copy = []
//     obj.forEach((v,i)=>copy[i]=v)
//     return copy
//   }
//   if(obj instanceof RegExp){
//     return new RegExp(obj)
//   }
//   if(obj instanceof Object){
//     copy = {}
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         copy[key] = deepClone(obj[key])
//       }
//     }
//     return copy
//   }
// } 

// console.log(a);
// console.log(typeof a.date);  // Date object
// const clone = JSON.parse(JSON.stringify(a));
// const clone = Object.assign({},a)

let deepClone = function (obj) {
  let copy
  if(obj===null||typeof obj !==null){
    return obj
  }
  //  RegExp
  if(obj instanceof RegExp){
    return new RegExp(obj)
  }

  if(obj instanceof Array){
    copy = []
    obj.forEach((v,i)=>copy[i]=v)
    return copy
  }

  if(obj instanceof Date){
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }
  
  if(obj instanceof Object){
    copy ={}
    for(let key in obj){
      if(Object.prototype.hasOwnProperty.call(obj,key)){
        copy[key]=deepClone(obj[key])
      }
    }
    return copy
  }

}

const clone = deepClone(a)

// clone.number = 234
console.log(clone);
a.fun = function (params) {
  return params + 2
}

console.log(clone.re instanceof RegExp);

