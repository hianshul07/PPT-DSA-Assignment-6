function minProductSum(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => b - a); 

	let productSum = 0;
	const n = nums1.length;

	for (let i = 0; i < n; i++) {
		productSum += nums1[i] * nums2[i];
	}

	return productSum;
}
