let str1 = "I am an angular developer";
let outputStr = "I ma na ralugna repoleved";

function reverseSubstring(stringInput) {
    let outputArray = [];
    let arrInput = stringInput.split(" ");
    console.log(arrInput);
    for(i=0; i< arrInput.length; i++) {
        let reverseOutput = arrInput[i].split("").reverse().join("");
        outputArray.push(reverseOutput);
    }

    return outputArray.join(" ");
    console.log(outputArray);
}

const temp2 = reverseSubstring(str1);
console.log(temp2);