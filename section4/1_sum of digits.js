// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for (const arrElement of arr) {
//         let sum = 0, tmp = arrElement
//         while (tmp){
//             sum += tmp % 10;
//             tmp = Math.floor(tmp / 10);
//         }
//         if(sum > max){
//             max = sum;
//             answer = arrElement;
//         }else if(sum === max){
//             answer = Math.max(answer, arrElement)
//         }
//     }
//
//     return answer;
// }
function solution(n, arr){
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (const arrElement of arr) {
        let sum = arrElement.toString().split('').reduce((a, b) => a + parseInt(b), 0)
        if(sum > max){
            max = sum;
            answer = arrElement;
        }else if(sum === max){
            answer = Math.max(answer, arrElement)
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));