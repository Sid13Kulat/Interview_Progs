function sortWithOutDuplicates(inputRadioStations) {
    let returnSortedArray = [];
    let tempVar;
    if (inputRadioStations.length) {
        for (let i = 0; i < inputRadioStations.length; i++) {
            for (let j = i + 1; j < inputRadioStations.length; j++) {
                if (inputRadioStations[i] > inputRadioStations[j]) {  // Swap it
                    tempVar = inputRadioStations[i];
                    inputRadioStations[i] = inputRadioStations[j];
                    inputRadioStations[j] = tempVar;
                }
            } // Closing loop of j
            returnSortedArray[inputRadioStations[i]] = inputRadioStations[i];
        } // Closing loop of j
    } // Closing if condition
    return returnSortedArray;
}

let radioStations = [93.5, 94.3, 91.1, 98.3, 94.3];
let sortedOutputArray = sortWithOutDuplicates(radioStations);
console.log("Final Output is ==>", Object.values(sortedOutputArray));