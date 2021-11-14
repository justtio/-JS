// function foo() {
//   var a = "hello world";
//   console.log(a);
// }

// foo();

// var b = "hello world";
// function bar() {
//   console.log(b);
// }

// bar();

// function bar() {
//   var b = "hello world";
// }

// function foo() {
//   console.log(b);
// }

// foo();

// function outer() {
//   var b = "hello world";
//   function inner() {
//     console.log(b);
//   }
//   inner();
// }

// outer();

var b = "hello world";
function outer() {
  function inner() {
    console.log(b);
  }
  inner();
}

outer();
