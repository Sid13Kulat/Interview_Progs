const a = [1,2,3,4,6,5,0,7];

function findingPairsOfInput(inputArray) {
    // const arrayLength = (inputArray) ? inputArray.length: 0;

    let outputCount = 0;
    if(inputArray.length) {
        for (let i=0; i< inputArray.length; i++) {
            let sum = 0;
            for(j = i+1; j < inputArray.length; j++) {
                sum = a[i] + a[j];
                if(sum === 7) {
                    outputCount++;
                }
            }
        }
    }
    return outputCount;
}

let pairsOutputCount = findingPairsOfInput(a);

console.log(pairsOutputCount);

