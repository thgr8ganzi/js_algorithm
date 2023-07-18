function solution(a, b){
    let answer="";

    for (let i = 0; i < a.length; i++) {
        let res = a[i] - b[i];
        if(res === 1 || res === -2) answer += 'A'
        else if(res === -1 || res === 2) answer += 'B'
        else answer += 'D'
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));