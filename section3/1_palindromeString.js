function solution(s){
    let answer="YES";
    // let str1 = ''
    // for (let i = s.length-1; i >= 0; i--) {
    //     str1 += s[i]
    // }
    // if(str.toUpperCase() !== s.toUpperCase()){
    //     answer = 'NO'
    // }
    // s = s.toLowerCase();
    // let len= s.length;
    // for(let i=0; i < Math.floor(len/2); i++){
    //     if( s[i] !== s[len-i-1]) return "NO";
    // }
    s.toUpperCase().split('').reverse().join('') === s.toUpperCase() ? answer : answer = "NO"
    return answer;
}

let str="goooG";
console.log(solution(str));