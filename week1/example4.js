/**
 * 构造函数和this
 */

// function Foo(){
//     this.bar = 'Rivaille'
// }

// const instance = new Foo();
// console.log(instance.bar);

// let obj = {};
// obj.__proto__ = Foo.prototype;
// Foo.call(obj);


// situation 1
// function Foo(){
//     this.user = 'Rivaille';
//     const o = {};
//     return o;
// }

// const instance = new Foo();
// console.log(instance.user);

// undefined

// //situation 2
function Foo() {
    this.user = 'Rivaille';
    return 1;
}
const instance = new Foo();
console.log(instance.user);