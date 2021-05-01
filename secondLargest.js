
function getSecondLargestValueFromInput(inputData) {
  var sencondLargest = 0;
  var firstLargest = 0;
  
  if(inputData.length) {
    // traversing the array to get first highest value
    for( var i=0; i < inputData.length; i++) {
      if(inputData[i] > firstLargest) {
        firstLargest = inputData[i];
      }
    }
    // now we will traversing the array once again
    for( var j=0; j < inputData.length; j++) {
      // console.log("Input is", j);
      if(inputData[j] > sencondLargest && inputData[j] < firstLargest) {
       // console.log(j, sencondLargest, firstLargest);
        sencondLargest = inputData[j];
      }
    }
    
  }
  return sencondLargest;
  
}



var arr = [10, 2 , 5, 8, 3, 6, 1, 12, 22, 36, 36, 4 ];
var secondLargest = getSecondLargestValueFromInput(arr);

console.log("Second largest value is \t" + secondLargest);


