// function foo() {
//   console.log(bar);
//   var bar = 3;
// }

// foo();

// function foo() {
//   var bar;
//   console.log(bar);
//   bar = 3;
// }

// foo();

// function foo() {
//   console.log(bar);
//   let bar = 3;
// }

// foo();

// function foo() {
//   let bar = 3;
//   console.log(bar);
// }

// foo();

// var foo1 = "foo1"; //全局作用域
// function bar1() {
//   var foo2 = "foo2"; //bar1的作用域

//   function bar2() {
//     var foo3 = "foo3"; //bar2作用域
//   }
// }

// function bar1() {
//   // console.log(foo3); //暂时性死区

//   let foo3 = "foo3";

//   console.log(foo3); //正常访问
// }

// bar1();

// function foo(arg1 = arg2, arg2) {
//   console.log(`${arg1} ${arg2}`);
// }

// foo("arg1", "arg2");

// function foo(arg1 = arg2, arg2) {
//   console.log(`${arg1} ${arg2}`);
// }

// foo(undefined, "arg2");

// function foo(arg1 = arg2, arg2) {
//   console.log(`${arg1} ${arg2}`);
// }

// foo(null, "arg2");

function foo(arg1) {
  let arg1;
}

foo("arg1");

function foo(arg1) {
  var arg1;
  let arg1;
}
