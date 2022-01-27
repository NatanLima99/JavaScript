/*
function parimp(n) {
    if (n % 2 == 0) {
        console.log(`O numero ${n} é par`)
    }else {
        console.log(`o numero ${n} e impar`)
    }
}
parimp(5)
parimp(2)
*/
function parimp(n) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}
let res = parimp(16)
console.log(`${res}`)