export const binarySearch = (arr, element) => {
	let left = 0
	let right = arr.length  -1
	while(left <= right) {
		let mid = Math.floor((end + start)/2);
		if(arr[mid] === element) return true;
		if(arr[mid] > element) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return false;
}