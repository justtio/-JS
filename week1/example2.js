/**
 * 上下文对象调用中的this
 */

// const student = {
//     name: 'Rivaille',
//     fn: function () {
//         return this;
//     }
// }

// console.log(student.fn() === student);
//true


// const person = {
//     name: 'Rivaille',
//     brother: {
//         name: 'levi',
//         fn: function () {
//             return this.name;
//         }
//     }
// }

// console.log(person.brother.fn()); //levi


const o1 = {
    text: 'o1',
    fn: function() {
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function(){
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function(){
        let fn = o1.fn;
        return fn();
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined

// 一个问题
// console.log(o2.fn)  // o2 
// 不使用 bind、call、apply显式干预

