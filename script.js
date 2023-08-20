function threeSum(arr, target) {
// write your code here
	let S = mainArr.slice();
	let newArray = [];
	for(let i = 0;i<S.length;i++){
		const min1 = S[0];
		const min2 = S[1];
		const min3 = S[2];
		
		const sum = min1 + min2 + min3;
		newArray[i] = sum;
		
		const toPush = S.shift();
		S.push(toPush);
		
	}
	
	let closestValue = findClosestValue(newArray,target);
	function findClosestValue(arr,target){
	let closestValue = arr[0];
	let minDifference = Math.abs(arr[0] - target);
	for(let i = 1;i < arr.length;i++){
		const difference = Math.abs(arr[i] - target);
		if(difference<minDifference){
			minDifference = difference;
			closestValue = arr[i];
		}
	}
	return closestValue;
	}
	
	return closestValue;
}

module.exports = threeSum;
