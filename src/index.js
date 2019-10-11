module.exports = function multiply(first, second) {
  let mult = BigInt(first) * BigInt(second);
  console.log("'" + mult + "'" + ", because " + first + " * " + second + " === " + mult);
  return mult.toString();
}