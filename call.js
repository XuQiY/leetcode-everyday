Function.prototype.mycall=function(thisArg,...args) {
  console.log(this,thisArg,args)
  return this.apply(thisArg,args)
}

Function.prototype.mycall2 = function (thisArg,...args) {
  let _fn = Symbol('_fn')
  thisArg[_fn] = this
  console.log(thisArg[_fn],args)
  thisArg[_fn](...args)
  delete thisArg[_fn]
}

Function.prototype.myapply = function (obj,args) {
  let _fn = Symbol('_fn')
  obj[_fn] = this
  console.log(obj[_fn],args)
  obj[_fn](...args)
  delete obj[_fn]
}

function say(x,y) {
  this.x = x
  this.y = y
  console.log(x+y)
}

let ob = {}

say.myapply(ob,[1,2,3])

console.log(ob)

Function.prototype._call = function (obj,...args) {
  let _fn = Symbol('_fn')
  obj[_fn] = this
  obj[_fn](...args)
  delete obj[_fn]
}

function say(name){
  console.log("hello" ,name)
  this.name = name
}
let obj = {name:''}
say._call(obj,'xu')
console.log(obj)