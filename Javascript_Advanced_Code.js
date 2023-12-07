/*
 * Filename: Javascript_Advanced_Code.js
 * Description: This code demonstrates advanced concepts and techniques in JavaScript.
 * Author: [Your Name]
 * Date: [Date]
 */

// Importing external libraries
const moment = require('moment');
const axios = require('axios');

// Class representing a Bank Account
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into Account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from Account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient funds in Account ${this.accountNumber}`);
    }
  }

  getBalance() {
    console.log(`Account ${this.accountNumber} has a balance of $${this.balance}`);
  }
}

// Example usage of the BankAccount class
const myAccount = new BankAccount('123456789', 1000);
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.getBalance();

// Function to calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Generating Fibonacci sequence up to a given number
function fibonacciSequence(limit) {
  let sequence = [0, 1];
  for (let i = 2; i < limit; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    if (nextNumber > limit) {
      break;
    }
    sequence.push(nextNumber);
  }
  return sequence;
}

console.log(fibonacciSequence(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Fetching and manipulating data from a JSON API
async function getWeatherForecast() {
  try {
    const response = await axios.get('https://api.weather.com/forecast');
    const data = response.data;
    const forecast = data.forecast;
    const todayTemperature = forecast.today.temperature;
    const tomorrowTemperature = forecast.tomorrow.temperature;

    console.log(`Today's temperature: ${todayTemperature}`);
    console.log(`Tomorrow's temperature: ${tomorrowTemperature}`);
  } catch (error) {
    console.error('Error retrieving weather forecast:', error.message);
  }
}

getWeatherForecast();

// Using moment.js library to format dates
const currentDate = moment().format('YYYY-MM-DD');
console.log(`Current date: ${currentDate}`);

// Demonstrating closures for creating private variables
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 1

// More code here... (Add additional advanced JavaScript techniques and concepts)