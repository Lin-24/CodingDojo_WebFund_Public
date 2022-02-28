// ###############################################################

// :graduation: ALGO CHALLENGE DAY #1 @everyone 

// 👇🏻 

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
// ==========================
// TAGS: FUNDAMENTALS ARRAYS
// ###############################################################


var sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function sheepChecker(sheep) {
    var present_count = 0;
    var invalid = 0;
    for(val of sheep){
        if(typeof(val) === "boolean"){
            if(val){
                present_count++
            }
        }
        else{
            invalid++
        }
    }
    console.log(`There are ${present_count} sheep present out of a flock of ${sheep.length}.\nThere were ${invalid} invalid log entries.`)    
}

sheepChecker(sheep)