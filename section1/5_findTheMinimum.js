function solution(arr){
    /*
    let answer;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if(arr[i] > arr[j]){
                arr[i] = answer;
                arr[i] = arr[j];
                arr[j] = answer
            }
        }
    }
    return arr[0];
    let answer, min=Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min) min=arr[i]
    }
    answer=min;
    return answer
    */
    let answer = Math.min(...arr)
    return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
//완
