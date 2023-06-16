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

function removeItems(array, idx, count){
    let copy = array.slice();
    copy.splice(idx, count)
    return copy;
}
function remove_item_by_name(cart,name){
    let idx = null;
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name === name) idx = i;
    }
    if(idx !== null)
        return removeItems(cart, idx, 1);
    return cart;
}

console.log(
    remove_item_by_name(array, 'c'),
    array
)