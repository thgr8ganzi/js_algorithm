function solution(s){
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g,'')
    s.split('').reverse().join('') === s ? answer : answer = 'NO'
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));