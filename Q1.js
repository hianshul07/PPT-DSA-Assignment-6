function findPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let min = 0;
  let max = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm[i] = min++;
    } else {
      perm[i] = max--;
    }
  }

  perm[n] = min; // or max, since min and max will be the same at this point
  return perm;
}