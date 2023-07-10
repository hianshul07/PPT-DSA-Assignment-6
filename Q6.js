function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the length is odd, it cannot be a doubled array
  }

  const countMap = new Map();
  const original = [];

  for (const num of changed) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of changed) {
    if (countMap.get(num) === 0) {
      continue; // Skip if the count is already used up
    }

    const halfNum = num / 2;

    if (countMap.get(halfNum) > 0) {
      original.push(halfNum); // Add the halved value to the original array
      countMap.set(halfNum, countMap.get(halfNum) - 1); // Decrement the count
    } else {
      return []; // Halved value does not exist, not a doubled array
    }
  }

  return original;
}

// Test the function
const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
