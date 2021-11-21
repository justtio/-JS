// var bar = function () {
//   console.log("bar2");
// };

// function bar() {
//   console.log("bar1");
// }

// bar();

// foo(10);
// function foo(num) {
//   console.log(foo);
//   foo = num;
//   var foo;
// }

// console.log(foo);
// foo = 1;
// console.log(foo);
//作用域其实在预编译阶段确定的 但是作用域链是在执行上下文的创建阶段完全生成的

function foo1() {
  foo2();
}

function foo2() {
  foo3();
}

function foo3() {
  foo4();
}

function foo4() {
  console.lg("foo4");
}

foo1();

//foo1 -> foo2 -> foo3 -> foo4
