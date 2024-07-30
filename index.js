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
