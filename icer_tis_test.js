// let linkedListObject = [
//     {
//         "data": 1,
//         "pointer-to-next": 2
//     },
//     {
//         "data": 2,
//         "pointer-to-next": 3
//     },
//     {
//         "data": 3,
//         "pointer-to-next": 4
//     }
// ];

let countOfList = 5;


function createLinkedList(inputLength) {
    let globalLinkedList = [];
    if(inputLength && inputLength > 0) {
        for (let i = 0; i <= countOfList; i++) {
            const newLinkedListObject = {};
            newLinkedListObject['data'] = i;
            if (i + 1 !== undefined) {
                newLinkedListObject['pointer-to-next'] = i + 1;
            } else {
                newLinkedListObject['data'] = null;
            }
            
            // Need to push into array
            globalLinkedList.push(newLinkedListObject);
        }
    
    }
    
    return globalLinkedList;
    
}


let recievedLinkedList = createLinkedList(6);
console.log(recievedLinkedList);
// console.log(linkedListObject);

object = {
    'data' : 'adad',
    'pointer-to-next': null
};


// 1 obejct 

object2 = {
    'data': 'andkjada',
    pon : null,
}
.inner: hover {
    position: absolute;
    top: 50%;
    left: 50%;
}
<span>

</span>
transform()

<div id="outer">
    <div id="inner"><div>
<div>


