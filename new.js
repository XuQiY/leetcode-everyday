function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say=function () {
  console.log(this.name,this.age)
}

// const p1 = new Person('xu',18)
// console.log(p1);
// p1.say()

function New(func) {
  const ob = {};
  if(func.prototype!==null){
    ob.__proto__ = func.prototype
  }
  let args = Array.prototype.slice.call(arguments,1)
  let res = func.apply(ob,args)
  if(res !==null&&(typeof res === 'function'||typeof res ==="object")){
    return res 
  }
  return ob
}
const _new = function (fn) {
  let obj = {}
  if(fn.prototype!==null)obj.__proto__ = fn.prototype
  let args  = Array.prototype.slice.call(arguments,1)
  let res = fn.apply(obj,args)
  if(res!==null&&res instanceof Object){return res}
  return obj
  
}
const p2 = _new(Person,'yy',20)
console.log(p2)
p2.say()