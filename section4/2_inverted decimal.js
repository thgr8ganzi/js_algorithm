function solution(arr){
    let answer=[];
    for (let arrElement of arr) {
        let reverse = 0;
        // let reverse = arrElement.toString().split('').reverse().reduce((a, b) => a + b, 0)
        while (arrElement){
            reverse = reverse * 10 + (arrElement % 10)
            arrElement = parseInt(arrElement / 10)
        }
        console.log(parseInt(reverse))
        isPrime(parseInt(reverse)) ? answer.push(parseInt(reverse)) : ''
    }
    return answer;
}
function isPrime(num){
    if(num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0){
            return false
        }
    }
    return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));