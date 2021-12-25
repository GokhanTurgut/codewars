function validParentheses(parens) {
  let opening = 0;
  let closing = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      opening++;
    }
    else if (parens[i] === ')') {
      closing++;
      if (closing > opening) return false;
    }
  }
  return opening === closing ? true : false;
}