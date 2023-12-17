/* 
   Filename: complex_code.js
   
   This code demonstrates a complex algorithm for calculating the n-th Fibonacci number using memoization.
   It also includes an implementation of the Sieve of Eratosthenes algorithm to generate prime numbers.
   The program utilizes recursion, dynamic programming, and advanced data structures to achieve efficient results.
*/

// Function to calculate the n-th Fibonacci number using memoization
function fibonacci(n, cache = {}) {
  if (n <= 2) return 1;
  if (n in cache) return cache[n];
  
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
}

// Function to generate prime numbers using the Sieve of Eratosthenes algorithm
function generatePrimes(n) {
  const primes = [];
  const sieve = new Array(n + 1).fill(true);
  
  for (let p = 2; p * p <= n; p++) {
    if (sieve[p]) {
      for (let i = p * p; i <= n; i += p) {
        sieve[i] = false;
      }
    }
  }
  
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) primes.push(i);
  }
  
  return primes;
}

// Utility function to print an array
function printArray(array) {
  console.log(array.join(", "));
}

// Test the Fibonacci function
console.log("Fibonacci Sequence:");
for (let i = 1; i <= 10; i++) {
  console.log(`fibonacci(${i}) = ${fibonacci(i)}`);
}

console.log("\n");

// Test the prime number generation function
console.log("Prime Numbers:");
const primes = generatePrimes(50);
printArray(primes);

console.log("\n");

// Additional complicated code goes here...