const getNumberSign = (num) => {
    if (num > 0) {
    return 'positive';
    } else if (num < 0) {
    return 'negative';
    } else {
    return 'zero';
    }
} 


console.log(getNumberSign(3));

console.log(getNumberSign(0));

console.log(getNumberSign(-5));