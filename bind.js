// (function(){
//   var slice = Array.prototype.slice;
//   Function.prototype.myBind = function() {
//     // this指向的是绑定的函数。arguments[0]指的是第一个参数，thisArg
//     var thatFunc = this, thatArg = arguments[0];
//     // args为剩余的参数
//     var args = slice.call(arguments, 1);
//     return function(){
//       // 合并参数
//       var funcArgs = args.concat(slice.call(arguments))
//       // 返回一个新方法
//       return thatFunc.apply(thatArg, funcArgs);
//     };
//   };
// })()
const slice = Array.prototype.slice
Function.prototype.myBind=function (params) {
  const thatFunc = this;
  const args = slice.call(arguments,1)
  const thatArg = arguments[0]
  return function () {
    return thatFunc.apply(thatArg,[...args,...slice.call(arguments)])
  }
}

function addNum(a,b) {
  return a+b
}
const newAdd = addNum.myBind(null,2);
console.log(newAdd(3))