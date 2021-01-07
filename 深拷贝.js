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
}
console.log(a);
console.log(typeof a.date);  // Date object
const clone = JSON.parse(JSON.stringify(a));
// const clone = Object.assign({},a)
// clone.number = 234
console.log(clone);
console.log(typeof clone.date);


function clone(obj) {
  if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
      return obj;

  if (obj instanceof Date)
      var temp = new obj.constructor(); //or new Date(obj);
  else
      var temp = obj.constructor();

  for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          obj['isActiveClone'] = null;
          temp[key] = clone(obj[key]);
          delete obj['isActiveClone'];
      }
  }
  return temp;
}


function cloneObject(obj) {
  var clone = {};
  for(var i in obj) {
      if(obj[i] != null &&  typeof(obj[i])=="object")
          clone[i] = cloneObject(obj[i]);
      else
          clone[i] = obj[i];
  }
  return clone;
}
