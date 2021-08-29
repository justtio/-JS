/**
 * 箭头函数中的this
 */

// const foo = {
//     fn: function () {
//         setTimeout(function(){
//             console.log(this);
//         })
//     }
// }

// console.log(foo.fn());
//window / global

const foo = {
    fn: function () {
        setTimeout(() => {
            console.log(this)
        })
    }
}

console.log(foo.fn());
