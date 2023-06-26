function solution(arr){
    /*
    let answer = 0;
    let i,j = 0;
    for (let k = 0; k < arr.length; k++) {
        answer += arr[k]
    }
    for (let k = 0; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
            if(answer - (arr[k] + arr[l]) === 100){
                i = k;
                j = l;
                break
            }
        }
    }
    let result = arr.filter((num, index) => index !== i && index !== j);
    return result;
     */
    let answer = arr;
    let sum = arr.reduce((a, b) => a + b, 0)
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if((sum - (arr[i] + arr[j])) === 100){
                arr.splice(j,1)
                arr.splice(i,1)
            }
        }
    }

    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
// 완