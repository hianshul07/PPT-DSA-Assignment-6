function validMountainArray(arr) {
	const n = arr.length;
	let i = 0;

	while (i < n - 1 && arr[i] < arr[i + 1]) {
		i++;
	}

	if (i === 0 || i === n - 1) {
		return false;
	}

	while (i < n - 1 && arr[i] > arr[i + 1]) {
		i++;
	}
	return i === n - 1;
}

// Test case
const arr = [2, 1];
const result = validMountainArray(arr);
console.log(result);
