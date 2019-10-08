module.exports = function multiply(first, second) {
 var firstNum = BigInt(first);
 var secondNum = BigInt(second);
 var result = firstNum * secondNum;
 return (result).toString().substr(0, result.length);
}
