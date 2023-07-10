function solution(s){
    let answer="";
    // answer = s.toUpperCase();
    for (const sElement of s) {
        // (sElement === sElement.toLowerCase()) ? answer += sElement.toUpperCase() : answer += sElement ;
        let num = sElement.charCodeAt();
        (97 <= num && num <= 122 )  ? answer  += String.fromCharCode(num - 32) : answer += sElement;
    }

    return answer;

}

let str="ItisTimeToStudy";
console.log(solution(str));