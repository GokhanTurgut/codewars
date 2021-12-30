function sumStrings(a, b) {
  const sum = BigInt(a) + BigInt(b);
  return sum.toString();
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))