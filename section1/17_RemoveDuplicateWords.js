function solution(s){
    let answer;
    answer = s.filter((value, index) => {
        return s.indexOf(value) === index
    })

    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));