function solution(s){
    let answer= 0;
    for (const sElement of s) {
        let num = sElement.charCodeAt();
        if(65 <= num && num <= 90 ) answer++;
        // (sElement === sElement.toUpperCase()) ? answer ++ : answer;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));