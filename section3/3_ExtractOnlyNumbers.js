function solution(str){
    let answer="";
    // for (const strKey of str) {
    //     if(answer === '' && strKey.charCodeAt() === 48) continue;
    //     strKey.charCodeAt() <= 57 && strKey.charCodeAt() >= 48 ? answer += strKey : ''
    // }
    // answer = str.replace(/[^0-9]/g, "");
    for (const strElement of str) {
        if(!isNaN(strElement)) answer += strElement
    }
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));