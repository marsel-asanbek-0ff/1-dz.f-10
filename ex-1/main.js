function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`Факториал ${number} равен ${factorial}`);
