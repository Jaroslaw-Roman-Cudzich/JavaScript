const fizzBuzz = (num) => {
    if (num % 15 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
      return num;
    }
}

for (let count = 1; count <= 50; count++) {
    console.log(`Fizzbuzz result for ${count} is ${fizzBuzz(count)}`);
}


module.exports = fizzBuzz;