function solution(s){
    let answer="";
    answer = s.replaceAll('A', '#')
    // for (const sElement of s) {
    //     sElement.toUpperCase() === "A" ? answer += '#' : answer += sElement;
    // }

    return answer;
}

let str="BANANA";
console.log(solution(str));