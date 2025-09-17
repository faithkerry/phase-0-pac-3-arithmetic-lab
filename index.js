function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

function makeInt(n) {
  return parseInt(n, 10); // always use base 10
}

function preserveDecimal(n) {
  return parseFloat(n); // preserves decimals
}

// export so tests can find them
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal
};
