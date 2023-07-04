a = [10, 11, 12, 13, 14, 15]

let result = a.reduce((acc, value) => {
    if(acc < 100) {
        return acc + value
    }else{
        return acc
    }
}, 99)
console.log(result)

/*
let result = a.filter((value, index) => value !== 10 && value !== 11)
console.log(result)

let answer = a.map((value, index, arr) => {
    return this[0]
},3)
var len = 5 >>> 2;
console.log(len)

function Counter() {
    this.sum = 0
    this.count = 0
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry
        ++this.count
    }, this)
    // ^---- 주의
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count)
// 3
console.log(obj.sum)
// 16
*/


