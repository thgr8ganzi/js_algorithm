function solution(arr){
    let copy = arr.slice().sort((a, b) => b - a);
    return copy.map(it => arr.indexOf(it) + 1)
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));