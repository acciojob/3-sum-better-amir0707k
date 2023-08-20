function threeSum(arr, target) {
// write your code here

	arr.sort((a, b) => a - b);
    let closestSum = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
	// let S = arr.slice();
	// let newArray = [];
	// for(let i = 0;i<S.length;i++){
 //            const min1 = S[0];
 //            const min2 = S[1];
 //            const min3 = S[2];
		
	// 	const sum = min1 + min2 + min3;
	// 	newArray[i] = sum;
		
	// 	const toPush = S.shift();
	// 	S.push(toPush);
		
	// }
	
	// let closestValue = findClosestValue(newArray,target);
	// function findClosestValue(arr,target){
	// let closestValue = arr[0];
	// let minDifference = Math.abs(arr[0] - target);
	// for(let i = 1;i < arr.length;i++){
	// 	const difference = Math.abs(arr[i] - target);
	// 	if(difference<minDifference){
	// 		minDifference = difference;
	// 		closestValue = arr[i];
	// 	}
	// }
	// return closestValue;
	// }
	
	// return closestValue;
}

module.exports = threeSum;
