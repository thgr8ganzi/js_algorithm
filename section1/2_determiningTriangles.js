function solution(a, b, c){
    /**
    let answer;
    if(a > b) answer = a;
    else answer = b
    if(c > answer) answer = c;
    if((a + b + c - answer) > answer) answer = "YES";
    else answer = "NO";
    return answer;
     **/
    let answer = "YES", max;
    let sum = a + b + c;
    if(a > b) max = a;
    else max = b;
    if(c>max) max = c;
    if((sum - max) <= max) answer = "NO"
    return answer;
}

console.log(solution(13,33,17));
//완

