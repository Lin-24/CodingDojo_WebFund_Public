// 1.write a function that returns the area of a triangle. Easy (area of a triangle is just base*height/2)
console.log("Algo #1")
function triangleArea(base,height){
    var area = base*height/2
    return (`The area of a triangle with a base of ${base} and a height of ${height} is ${area}`)
}

console.log(triangleArea(3,3))

// 2.Turn minutes into seconds using a function. Example 1 min: output = 60 seconds  3 mins: output = 180 seconds. Easy 
console.log("\nAlgo #2")
function minsToSecs(mins) {
    console.log(`${mins} minutes is ${mins*60} seconds`)
}

minsToSecs(5)

// 3.Write a function that returns the sum of two given arrays and the sum of those arrays together
// example: [1,2,3], [1,2,3] = [6], [6] output:12. medium
console.log("\nAlgo #3")
function sumArrays(arr1, arr2) {
    sub1 = 0;
    sub2 = 0;
    if(arr1.length === arr2.length){
        for(var i = 0; i< arr1.length; i++){
            sub1 += arr1[i];
            sub2 += arr2[i];
        }
    }
    else{
        for(var i = 0; i< arr1.length; i++){
            sub1 += arr1[i];
        }
        for(var i = 0; i< arr2.length; i++){
            sub2 += arr2[i];
        }
    }
    console.log(`Sum of all elements in array 1: ${sub1}`)
    console.log(`Sum of all elements in array 2: ${sub2}`)
    return sub1 + sub2
}
console.log(`The sum of the 2 arrays is: ${sumArrays([2,2,3], [1,2,3,1])}`)

// 4.Given an unsorted integer array, find a pair with the given sum in it. Hard

// Input:
// nums = [8, 7, 2, 5, 3, 1]
// target = 10

// Output:
// Pair found (8, 2) or Pair found (7, 3)
console.log("\nAlgo #4")
function findInts(arr, target) {
    pairNotLocated = true
    for(var i = 0; i < arr.length; i++){
        for(var b = i+1; b < arr.length; b++)
            if((arr[i] + arr[b]) === target){
                console.log(`Target pair found: (${arr[i]},${arr[b]})`)
                pairNotLocated = false
            }
    }
    if(pairNotLocated){
        console.log(`No pair in array sums to ${target}`)
    }
}

findInts([8, 7, 2, 5, 3, 1], 16)