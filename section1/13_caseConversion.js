function solution(s){
    let answer="";
    for (const sElement of s) {
        sElement === sElement.toUpperCase() ? answer += sElement.toLowerCase() : answer += sElement.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));