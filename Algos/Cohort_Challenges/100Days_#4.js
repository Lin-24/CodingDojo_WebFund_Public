// ###############################################################

// :graduation: ALGO CHALLENGE DAY #2 @everyone 

// 👇🏻 
// #Disemvowel Trolls
// Description:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    var arr = ["a", "e", "i", "o", "u"]
    var disemvoweled = ""
    for(var char of str){
        if(arr.includes(char.toLowerCase())){
            continue
        }
        else{
            disemvoweled += char
        }
    }
    return disemvoweled
}

console.log(disemvowel("This website is for losers LOL! It's Terrible!"))