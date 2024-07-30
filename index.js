// slice, splice,

//slice = метод массива - иммутабельный

//массив.slice(откуда отрезать, [докуда отрезать]);

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// let res = arr.slice(0, 3) //2-1 параметр не включительно
//
// console.log('arr: ', arr)
// console.log('res: ', res)

// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// let res2 = arr2.slice(2)
//
// console.log('arr2: ', arr2)
// console.log('res2: ', res2)

// let arr3 = ['a', 'b', 'c', 'd', 'e'];
// let res3 = arr3.slice(1, -1)
//
// console.log('arr3: ', arr3)
// console.log('res3: ', res3)

// let arr4 = ['a', 'b', 'c', 'd', 'e'];
// let res4 = arr4.slice()
//
// console.log('isEqual: ', arr4 == res4)
// console.log('arr4: ', arr4)
// console.log('res4: ', res4)

//--------------------------------------------------------//

//splice = метод массива (мутирующий)
// массив.splice(откуда удаляем/добавляем элемент, сколько удаляем, [вставляем], [вставляем]...)

// let initialArr = ['a', 'b', 'c', 'd', 'e'];
// let result = initialArr.splice(1, 3)
//
// console.log('initialArr: ', initialArr) // ['a', 'e']
// console.log('result: ', result)

// let initialArr2 = ['a', 'b', 'c', 'd', 'e'];
// let result2 = initialArr2.splice(1, 0, 'value1', 'value2');
//
// console.log('initialArr2: ', initialArr2) // [ 'a', 'value1', 'value2', 'd', 'e' ]
// console.log('result2: ', result2) // []

// let initialArr3 = ['a', 'b', 'c', 'd', 'e'];
// let result3 = initialArr3.splice(1, 2, 'value1', 'value2');
//
// console.log('initialArr3: ', initialArr3) // [ 'a', 'value1', 'value2', 'd', 'e' ]
// console.log('result3: ', result3) // ['b', 'c']

// имутабельная версия toSpliced

//-------------------------------------------------------//

//reduce

// arr.reduce(() => (acc, el, index) => {}) - если не передаем через запятую начальное значение аккумулятора
// то оно будет arr[0]
// arr.reduce((acc, el, index) => {}, 0)

// initialArr.reduce = коробка с конфетами
// acc - пустая коробка, то есть ноль конфет
// el - initialArr[i] будем каждый раз получать новую конфету на каждом цикле итерации
// index

// for:

// let a = [1, 2, 3, 4, 5]; //initialArr
// let sum = 0 //acc

// for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i] // a[i] - это наш элемент в редьюсе
// }

// console.log(sum) // 15

// complete task using reduce

// let arr = [1, 2, 3, 4, 5]; //initialArr
//
// let result = arr.reduce((acc, current) => {
//     console.log('acc: ', acc);
//     console.log('current: ', current);
//     return acc + current;
// }, 0)
//
// console.log(result)

// const fruits = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 3 },
//     { name: 'orange', quantity: 1 },
// ];
//
// // хочу получить общее количество фруктов на складе
//
// let result = fruits.reduce((acc, fruit) => acc + fruit.quantity, 0)
//
// console.log(result) // 6

// // find max number
// const numbers = [1, 5, 10, 35, 45, 100, 25]
// const result = numbers.reduce((acc, number) => {
//     console.log('acc: ', acc)
//     console.log('number: ', number)
//     return number > acc ? number : acc
// }) // по дефолту numbers[0] - начальное значение

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ]; // expected: {totalNames: [...names], totalAges: 0}
//
// const result = people.reduce((acc, current) => {
//     console.log('acc: ', acc)
//     console.log('currentPeople: ', current)
//
//     acc.totalNames.push(current.name)
//     acc.totalAges += current.age // acc.totalAges = acc.totalAges + currentPeople.age
//     return acc;
// }, {totalNames: [], totalAges: 0})
//
// console.log(result)

// const peoples = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ]; // expected: хочу получить суммарный бюджет в виде числа, например, 50000
//
// const result = peoples.reduce((acc, current) => {
//     return acc += current.budget
// }, 0)
//
// console.log(result)

// const numbers = [1, 5, 10, 35, 45, 100, 25]
// let result = numbers.reduce((acc, val) => {
//     return acc > val ? val : acc
// })
//
// console.log(result)

// new task
// const words = ['Hello', ' ', 'world', '!']; // expected: "Hello world"
//
// const newString = words.reduce((acc, word) => {
//     return acc + word
// }, '')
//
// console.log(newString)

// const peoples = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ];
//
// const res = peoples.reduce((acc, {name}) => {
//     acc.push(name);
//     return acc;
// }, []);
//
// console.log(res)
