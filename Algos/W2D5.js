var square = [
    [2,5,8],
    [3,6,1],
    [5,7,7]
];
//should return true or false is val is found in arr2d
console.log("Challenge 1\n");
function isPresent2d(arr2d, val){
    for(var i = 0; i < arr2d.length; i++){
        for(var b = 0; b < arr2d[i].length; b++){
            if(arr2d[i][b] === val){
                return true
            }
        }
    }
    return false
}
function isPresent2dV2(arr2d, val) {
    for(arr of arr2d){
        if(arr.includes(val)){
            return true
        }
    }
    return false
}

// console.log(isPresent2dV2(square,1)); //expect return true
// console.log(isPresent2dV2(square,14)); // expect return false

// console.log("\n\nChallenge 1 v2\n");
// console.log(isPresent2d(square,1)); //expect return true
// console.log(isPresent2d(square,14)); // expect return false



console.log("\n\nChallenge 2\n");


function flatten(arr2d){
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){
        for(var b = 0; b < arr2d[i].length; b++){
            // console.log("\nTop level index: " + i, "Sub Index: " + b);
            // console.log("Val to be Pushed: " + arr2d[i][b]);
            flat.push(arr2d[i][b]);
        }
    }
    return flat;
}

var result = flatten(square);   
console.log(result); //should print out 2,5,8,3,6,1,5,7,7