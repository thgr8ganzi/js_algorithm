let array = [
    {
        name : 'a',
        age : 10
    },
    {
        name : 'b',
        age : 20
    },
    {
        name : 'c',
        age : 30
    },
    {
        name : 'd',
        age : 40
    },
]

// function arrayCopy(arr){
//     let copy = arr.slice();
//     for (let i = 0; i < copy.length; i++) {
//         if(copy[i].name === 'd'){
//             copy[i] = ObjCopy(copy[i]);
//         }
//     }
//     return copy
// }
// function ObjCopy(copy_arr){
//     let copy_obj = Object.assign({},copy_arr);
//     copy_obj.name = 'abc'
//     return copy_obj
// }
// let ar = arrayCopy(array)
// console.log(ar)
// console.log(array)
//
// function removeItems(array, idx, count){
//     let copy = array.slice();
//     copy.splice(idx, count)
//     return copy;
// }
// function remove_item_by_name(cart,name){
//     let idx = null;
//     for (let i = 0; i < cart.length; i++) {
//         if(cart[i].name === name) idx = i;
//     }
//     if(idx !== null)
//         return removeItems(cart, idx, 1);
//     return cart;
// }
//
// console.log(
//     remove_item_by_name(array, 'c'),
//     array
// )
// let a = [1, 2, 3, 4];
//
// function pop(array){
//     let array_copy = array.slice();
//     let first = array_copy.pop();
//     return {
//         first : first,
//         array : array_copy
//     }
// }
// console.log(a)
// console.log(pop(a))
// console.log(a)

const arr = [1, 2, 3, 4, 1];
//
// const f1 = function (arr, good = 'good', best = 'best'){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 1){
//             newArr.push(good);
//         }else{
//             newArr.push(best);
//         }
//     }
//     return newArr;
// }
// const f2 = function (arr, good = 'good', best = 'best'){
//     return mapFunc(arr,function (arr){
//         return check(arr, good, best)
//     })
// }
// function mapFunc(arr,f2){
//     let newArr = [];
//     forFunc(arr, function (elm){
//         newArr.push(f2(elm));
//     })
//     return newArr;
// }
// function forFunc(arr, f1){
//     for (let i = 0; i < arr.length; i++) {
//         f1(arr[i])
//     }
// }
// function check(i, good, best){
//     if(i === 1){
//         return good
//     }else{
//         return best
//     }
// }
//
// const f2 =  (arr, good = 'good', best = 'best') => {
//     return filterFunc(arr, function (value){
//         return value < 2 ? good : best;
//     });
// }
// const filterFunc = (arr, f) => {
//     let newArr = [];
//     forFunc(arr, (elm) => {
//         newArr.push(f(elm))
//     })
//     return newArr;
// }
// const forFunc = (arr, f) => {
//     for (let i = 0; i < arr.length; i++) {
//         f(arr[i])
//     }
// }
// const f2 = (arr, good = 'good', best = 'best') => {
//     return reduceFunc(arr, 0, (total, arr) => {
//         return total + arr
//     })
// }
// const reduceFunc = (arr, init, f) => {
//     let accum = init;
//     forEachFunc(arr, (elem) => {
//         accum = f(accum, elem);
//     })
//     return accum;
// }
// const forEachFunc = (arr, f) => {
//     for (let i = 0; i < arr.length; i++) {
//         f(arr[i]);
//     }
// }
// const result = (arr) => {
//     return reduce(arr, 0, (total, arr2) => {
//         return total + arr2;
//     });
// }
// const reduce = (arr, init, f) =>{
//     let accum = init
//     forEachFunc(arr, (elem) => {
//         accum = f(accum, elem);
//     })
//     return accum;
// }
// const forEachFunc = (arr, f) => {
//     for (let i = 0; i < arr.length; i++) {
//         f(arr[i]);
//     }
// }
// function makeAdder(n){
//     return function(x){
//         return n + x;
//     };
// }
// // 커링
// const n = makeAdder(1)(10);
// console.log(n);
//
// const result = (arr) => {
//     return reduce(arr, 0);
// }
// const reduce = (arr, init) =>{
//     let accum = init
//     for (let i = 0; i < arr.length; i++) {
//         accum = accum + arr[i]
//     }
//     return accum;
// }
// const reduceFuncResult = result(arr)
// console.log(reduceFuncResult)

