console.log("Challenge 1");
// Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    if(!arr.includes("food")){
        console.log("I'm hungry");
        return
    }
    for(val of arr){
        if(val === "food"){
            console.log("yummy");
        }
    } 
    
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


console.log("\n\nChallenge 2");
// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(val of arr){
        if(val > cutoff){
            filteredArr.push(val)
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 
// we expect back [6, 8, 10, 9]


console.log("\n\nChallenge 3");
// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(val of arr){
        sum += val;
    }
    var avg = sum/arr.length;
    var count = 0;
    // count how many values are greated than the average
    for(val of arr){
        if(val > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 
// we expect back 4


console.log("\n\nChallenge 4");
// Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    for(var index = 0; index < arr.length/2; index++){
        [arr[index], arr[arr.length-1-index]] = [arr[arr.length-1-index], arr[index]];
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 
// we expect back ["e", "d", "c", "b", "a"]


console.log("\n\nChallenge 5");
// Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    while(n > fibArr.length){
        var i = fibArr.length-1
        fibArr.push(fibArr[i]+fibArr[i-1])
    }
    return fibArr;
}
   
var result = fibonacciArray(20);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
