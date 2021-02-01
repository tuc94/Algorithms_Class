function isPalindrome(string) {
  let length = string.length;
  let result = isPalindrome(string.slice(1)) + string[0];
  if (length === 1) {
    return string;
  } else if (string === result) {
    return true;
  }
  return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
