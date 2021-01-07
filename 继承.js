// es6
// {
// class Person {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   printInfo(){
//     console.log(this.name +':  '+ this.age)
//   }
// }

// class Student extends Person{
//   constructor(name,age,score){
//     super(name,age)
//     this.score = score
//   }
  
//   printInfo(){
//     console.log(this.name +':  '+ this.age + '\t'+this.score)
//   }

// }

// const p1 =new Person('x',18)
// const p2 =new Student('yy',20,20)

// p1.printInfo()
// p2.printInfo()
// }

// es5
{
  function Person(name,age) {
    this.name = name
    this.age = age
    this.arr = []
  }

  function Student(name,age,score) {
    Person.call(this,name,age)
    this.score = score
  }

  Student.prototype = new Person()
  Student.prototype.constructor = Student

  const p1 = new Person('x',18)
  const s1 = new Student('y',19,99)
  const s2 = new Student('z',20,100)
  p1.arr.push(1)

  console.log(p1)
  console.log(s1)
  console.log(s2)
  console.log(s1 instanceof Person)
}