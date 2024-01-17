const fizzbuzz = (a) => {
    if (a % 3 === 0 && a % 5 === 0) {
        return 'FizzBuzz'
    } else if (a % 3 === 0) {
        return 'Fizz'
    } else if (a % 5 === 0 ) {
        return 'Buzz'
    } else {
        return a
    }
}

module.exports = fizzbuzz;