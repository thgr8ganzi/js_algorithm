function solution(s){
    let answer="", max=Number.MIN_SAFE_INTEGER;
    for (const sElement of s) {
        if(sElement.length > max){
            answer = sElement;
            max = sElement.length;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));