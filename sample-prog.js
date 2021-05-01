var globalCounter = 1;

function increaseValueOfParam() {
	var count = 0;
	return function() {
		console.log(count + "\n");
		return count++;
	}
	//return sample;
} 


var data = increaseValueOfParam();
data(); // 1
data(); // 2
data(); // 3



















 
 
 







