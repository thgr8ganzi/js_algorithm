function solution(arr){
    let answer = 0;
    let acc = 0
    arr.forEach(it => {
        if(it === 1){
            acc++;
            answer+=acc;
        }else if(it === 0){
            acc = 0;
        }
    })
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));