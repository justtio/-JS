/**
 * 通过bind、call、apply改变this指向
 */

// //1
// const target = {};
// fn.call(target, 'arg1', 'arg2');

// //2
// const target = {};
// fn.apply(target, ['arg1', 'arg2']);

// //3
// const target = {};
// fn.bind(target, 'arg1', 'arg2')();



const foo = {
    name: 'rivaille',
    logName: function () {
        console.log(this.name);
    }
}

const bar = {
    name: 'levi'
}

console.log(foo.logName.call(bar)); // levi