function solution(s, t){
    let answer= (s.split(t).length - 1)
    // for (const sElement of s) {
    //     if(sElement === t) answer ++;
    // }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));