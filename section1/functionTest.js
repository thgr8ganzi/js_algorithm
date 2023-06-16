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

function arrayCopy(arr){
    let copy = arr.slice();
    for (let i = 0; i < copy.length; i++) {
        if(copy[i].name === 'd'){
            copy[i] = ObjCopy(copy[i]);
        }
    }
    return copy
}
function ObjCopy(copy_arr){
    let copy_obj = Object.assign({},copy_arr);
    copy_obj.name = 'abc'
    return copy_obj
}
let ar = arrayCopy(array)
console.log(ar)
console.log(array)