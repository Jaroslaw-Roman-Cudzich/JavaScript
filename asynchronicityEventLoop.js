// setTimeout(() => {
// 	console.log('hello')
// }, 1000)


// const callback = () => {
// 	console.log('hello')
// }

// setTimeout(callback, 1000)

// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 1000)

// console.log('D')


// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 1000)

// console.log('D')

// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D')

// let a = 10

// const callback = () => {
// 	a = 20
// }

// setTimeout(callback, 1000)

// console.log(a)

// let a = 10

// const callback = () => {
// 	a = 20
// }
// setTimeout(callback, 0)

// console.log(a)


// let a = 10
// console.log(a)

// const callback = () => {
// 	a = 20
// 	console.log(a)
// }
// setTimeout(callback, 0)


// const callback = () => {
// 	return "hello"
// }
// setTimeout(callback, 2000)


console.log('A')

const sayHello = () => {
    console.log('hello')
}

const callback = () => {
    setTimeout(sayHello, 500)
    console.log('B')
}

console.log('C')

setTimeout(callback, 1000)

console.log('D')


