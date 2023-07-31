function solution(s, t){
    // let answer=[];
    // let d = s.split('').map((it, idx) => it === t ? idx : '').filter(e => e)
    // for (const sElement in s) {
    //     let small = Number.MAX_SAFE_INTEGER;
    //     for (const dElement of d) {
    //         Math.abs(dElement - sElement) < small ? small =  Math.abs(dElement - sElement) : small
    //         if(dElement - sElement === 0) break;
    //     }
    //     answer.push(small)
    // }
    // return answer;
    let answer = [];
    let p = s.length + 1;
    for (const x of s) {
        if(x === t){
            p = 0
            answer.push(p)
        }else{
            p++;
            answer.push(p)
        }
    }
    p = s.length + 1;
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] === t) p = 0;
        else{
            p++;
            answer[i] = Math.min(answer[i], p)
        }
    }
    return answer
}

let str="teachermode";
console.log(solution(str, 'e'));