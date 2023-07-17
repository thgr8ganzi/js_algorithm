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
// const todoList = [
//     {
//         'done': true,
//         'text': '오늘 할일'
//     },
//     {
//         'done': false,
//         'text': '내일 할일'
//     },
//     {
//         'done': true,
//         'text': '모레 할일'
//     }]
//
// const pipe = (...functions) => (value) => functions.reduce((acc, currentFunc) => currentFunc(acc, value), [])
//
// const filterList = (flag) => (acc, value) => value.filter(item => item.done === flag)
//
// const printList = (acc) => () => acc.map(item => item)
//
// const printDoneTrueList = pipe(filterList(true), printList)(todoList)();
//
// console.log(printDoneTrueList)

// investment 투자금
// returnRate 수익률
// 수익: 투자금 * 수익률
// 배열에서 투자금이 5000 이상인 투자자들을 찾고, 나이대별로 그룹화하여 이름과 수익을 보여주세요
const investors = [
    { name: "John", age: 35, investment: 5000, returnRate: 0.15 },
    { name: "Alice", age: 42, investment: 8000, returnRate: 0.12 },
    { name: "Bob", age: 28, investment: 3000, returnRate: 0.18 },
    { name: "Carol", age: 55, investment: 10000, returnRate: 0.13 },
    { name: "David", age: 47, investment: 6000, returnRate: 0.11 },
    { name: "Eve", age: 31, investment: 7000, returnRate: 0.16 },
    { name: "Frank", age: 39, investment: 9000, returnRate: 0.19 },
    { name: "Grace", age: 44, investment: 12000, returnRate: 0.14 },
    { name: "Henry", age: 52, investment: 1000, returnRate: 0.17 },
    { name: "Ivy", age: 36, investment: 4000, returnRate: 0.10 },
    { name: "Jane", age: 28, investment: 2000, returnRate: 0.15 },
    { name: "Kate", age: 29, investment: 3000, returnRate: 0.12 },
    { name: "Luke", age: 26, investment: 4000, returnRate: 0.18 },
    { name: "Mark", age: 27, investment: 2500, returnRate: 0.13 },
    { name: "Nancy", age: 25, investment: 1500, returnRate: 0.11 }
];

// 나이대 별 그룹화 함수
function getAgeRange(age) {
    if (age >= 20 && age < 30) {
        return "20s";
    } else if (age >= 30 && age < 40) {
        return "30s";
    } else if (age >= 40 && age < 50) {
        return "40s";
    } else if (age >= 50 && age < 60) {
        return "50s";
    } else {
        return "Unknown";
    }
}
console.log(
    investors.filter((investor) => investor.investment >= 5000)
        .map((investor) => ({...investor, profit : Math.floor(investor.investment * investor.returnRate)}))
        .reduce((acc, cur, idx) => ({
            ...acc,
            [getAgeRange(cur.age)]: [
                    ...(acc[getAgeRange(cur.age)] ?? []),
                {
                    ...cur
                }
                ],
        }), {})
)
// orders : 주문 배열
// products: 상품 배열
// productId: 상품 번호
// price: 상품 금액
// 주문 금액: quantity * price
// 19500
// hint: find() 함수
products.find(product => product.id === order.productId)

const orders = [
    { id: 1, productId: 1, quantity: 2 },
    { id: 2, productId: 2, quantity: 1 },
    { id: 3, productId: 3, quantity: 5 },
    { id: 4, productId: 2, quantity: 3 },
    { id: 5, productId: 1, quantity: 4 },
    { id: 6, productId: 3, quantity: 2 },
    { id: 7, productId: 4, quantity: 1 },
    { id: 8, productId: 2, quantity: 2 },
    { id: 9, productId: 3, quantity: 3 },
    { id: 10, productId: 1, quantity: 1 }
];

const products = [
    { id: 1, name: 'Apple', price: 1000 },
    { id: 2, name: 'Banana', price: 500 },
    { id: 3, name: 'Orange', price: 800 },
    { id: 4, name: 'Grapes', price: 1500 }
];
console.log(
    orders.reduce((acc, cur) => {
        acc += cur.quantity * products.find(product => product.id === cur.productId).price
        return acc
    },0)
)

var flattened1 = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => {
    acc = acc ?? [];
    acc.push(...cur)
    return acc
},[])
var flattened2 = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
);
let arrs = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4, 6, 6];
let result = arrs.sort().reduce((acc, cur, idx) => {
    acc = acc ?? []
    idx === 0 ? acc.push(cur) : ''
    acc[acc.length - 1] === cur ? '' : acc.push(cur)
    return acc
},[]);