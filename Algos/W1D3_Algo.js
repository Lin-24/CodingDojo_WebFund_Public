var countPositives = 0;
var nums = [4,8,-15,-16,23,-42, 18, -42];

// Your code here!
for(var i= 0; i<nums.length; i++){
    if(nums[i] > 0){
        countPositives++; //Same as countPositive += countPositives + 1
    }
}

console.log(`There are ${countPositives} positive values`)