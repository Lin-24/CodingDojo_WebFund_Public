var x = 5

function setX(value) {
    x = value
}

console.log(x)
setX(15)
console.log(x)


var y = 5

function addToX(value) {
    return y + value
    console.log("hey it's me")
}

console.log(y)
var result = addToX(-10)
console.log(result)
console.log(y)





function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

