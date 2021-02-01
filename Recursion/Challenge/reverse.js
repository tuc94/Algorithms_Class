function reverse(string) {
  let length = string.length;
  if (length === 1) {
    return string;
  }
  return reverse(string.slice(1)) + string[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
