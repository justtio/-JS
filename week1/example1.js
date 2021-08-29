/**
 * 全局环境中的this
 */
// function f1() {
//     console.log(this);
// }
// // global / window

// function f2() {
//     'use strict';
//     console.log(this);
// }

// //undefined

// f1();
// f2();

// const foo = {
//     bar: 10,
//     fn: function() {
//         console.log(this);
//         console.log(this.bar);
//     }
// }

// let fn1 = foo.fn;
// fn1();

// console.log(window);
// console.log(window.bar);

const foo = {
    bar: 10,
    fn: function() {
        console.log(this)
        console.log(this.bar)
    }
}

foo.fn()
//{bar: 10, fn: f}
//10