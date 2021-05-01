

function findTheMaximumFromInput(inputArray) {
    let returnOutPutArray = [];
    let maxNumber = 0;

    for(let i=0; i< inputArray.length; i++) {
        maxNumber = inputArray[i];
        for(j= i+1; j < inputArray.length; j++) {
            if(maxNumber < inputArray[j]) {
                maxNumber = inputArray[j];
            }
        }
    }
}

const maxArray = [10, 4, 3, 50, 23, 90];
let maximumOutput = findTheMaximumFromInput(maxArray);


