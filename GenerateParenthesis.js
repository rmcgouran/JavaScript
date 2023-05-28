function generateParenthesis(n) {
  let res = [];
  backTrack(res, "", 0, 0, n);
  return res;
}

function backTrack(res, cur, open, close, max) {
  if (cur.length == max * 2) {
    res.push(cur);
    return;
  }

  if (open < max) {
    backTrack(res, cur + "(", open + 1, close, max);
  }
  if (close < open) {
    backTrack(res, cur + ")", open, close + 1, max);
  }
}

console.log(generateParenthesis(1));
