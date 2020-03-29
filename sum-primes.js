function sumPrimes(num) {
    // we create an array with first two prime numbers
    let primeArray = [2, 3];
    
    // we iterate through the numbers until our num input, checking if they're prime numbers - if they are, we push them to our primeArray
    for (let i = 5; i <= num; i += 2) {
        if (primeArray.every(function(p) { return i % p; })) {
            primeArray.push(i);
        }
    }
    
    // now we need to sum all prime numbers smaller or equal to num input
    function sumArray (total, number) {
      return total + number;
    }
    let primesSummed = primeArray.reduce(sumArray);
    
    // and finally - we return our summed primes
    return primesSummed;
}
