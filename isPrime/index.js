const isPrime = num => {
  // do code here
  let prime = num + " IS A PRIME";
  let notPrime = num + " IS NOT A PRIME";

  if (num < 2) {
    return notPrime;
  }

  if (num != Math.round(num)) {
    return notPrime;
  }

  let numPrime = prime;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      numPrime = notPrime
    }
  }
  
  return numPrime;
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

