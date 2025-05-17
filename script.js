const obj = {
    name: "Alice",
    age: 23,
    sayHello: function() {
        return "hello"
    },
    career: {}
}

const obj2 = {
    hairColor: "black",
    arr: [1, 2, 3],
    name: "Tim"
}

const obj3 = {...obj, ...obj2}

obj3.career.info = "tech"
console.log(obj, obj3)

// for (let key in obj) {
//     console.log(key)
// }

// const arr = [1, 2, 3, 4]

// for (let [i, value] of arr.entries()) {
//     console.log(i, value)
// }

// const arr = [1,2,3]

// for (let value of arr) {
//     console.log(value)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// do {
//     console.log("run")
//     break
// }while (true)

// while (true) {
//     console.log("hello")
//     break
// }

// const x = [1, 2, 3, 4]
// const y = [1, 2, 3, ...x]

// y.push("hello")

// console.log(x, y)

// const [x, x2, ...y] = [1, 2, 3, 4]

// console.log(x, x2, y)

// const arr = [1, 2, 3, true]
// const arr2 = new Array.from("hello")

// const arr3 = arr.splice(1, 2)
// console.log(arr3)

// const arr3 = arr.slice(1, 3)
// console.log(arr3)

// const str = arr.join("|")
// console.log(str)

// const arr3 = arr.concat(arr2)
// console.log(arr3)

// const arr = [1, 2, 3, true]
// const arr2 = new Array.from("hello")

// console.log(arr2.IndexOf("1"))
// onsole.log(arr2.includes("1"))

// const arr = [1, 2, 3, true]
// const arr2 = new Array.from("hello")

// arr2.push(4)
// arr2.pop()
// arr2.shift()
// arr2.unshift("new")
// console.log(arr2)

// const arr = [1, 2, 3, true]
// const arr2 = new Array.from("hello")

// arr2[0] = "y"
// console.log(arr2)

// const arr = [1, 2, 3, true]
// const arr2 = new Array(5)
// console.log(arr2[2])

// const value = 4

// switch (value) {
//     case 3:
//         console.log("3 is cool")
//         break
// case 4:
//         console.log("4 is not cool")
//         break
// default:
//         console.log("okay")
//         break;            
// }

// const cond = 2 < 3 ? "okay cool" : "no"
// console.log(cond)

// const cond = false ? "okay cool" : "no"
// console.log(cond)

// if (true)
//     console.log('hello world')
// else
//     console.log("run")

// if (true) {
//     console.log('hello world')
// } else if (false) {
//     console.log("")
// } else if () {

// } else {

// }

// console.log("1" == 1)

// console.log("1" != 2)

// console.log("1" !== 1)

// console.log(1 === 1)

// const x = 2345
// const y = 2

// console.log(String(x) + y)

// const x = 2345
// const y = 2

// console.log(x + "")

// const x = 2345
// const y = 2

// console.log(x.toString())

// const x = "2345.8"
// const y = 2

// console.log(Number(true) + y)

// const x = "2345.8"
// const y = 2

// console.log(Number(x) + y)

// const x = "2345px"
// const y = 2

// console.log(parseInt(x) + y)

// const x = "2345.4px"
// const y = 2

// console.log(parseFloat(x) + y)

// const x = "2345"
// const y = 2

// console.log(x * y)

// const x = 6
// const y = "7"

// console.log(y + x)

// function test() {
//         console.log(x)
//         let x = "test"
//         console.log(x)
// }

// test()


// const getUserInfo = require("prompt-sync")()

// const v = getUserInfo("type something")
// console.log(v)


// const v = 64

// console.log(`V=${v}`)
// console.error("error")
// console.warn("warning")

// // single line comment
// /* multi line comment
// hello
// */