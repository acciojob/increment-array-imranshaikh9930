let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here

	let newArr = [];

	for(let i of arr){

		newArr.push(i+1);
	}
	return newArr;
}

alert(incrementArray(arr))
