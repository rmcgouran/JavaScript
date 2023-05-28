function isPalindrome(x) {
  // Negative numbers are not palindromes
  if (x < 0) {
    return false;
  }

  // Store the original number
  let original = x;
  let reversed = 0;

  while (x > 0) {
    let remainder = x % 10;
    reversed = reversed * 10 + remainder;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
