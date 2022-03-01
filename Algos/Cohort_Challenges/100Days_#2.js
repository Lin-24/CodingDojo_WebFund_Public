// ###############################################################
// :graduation: ALGO CHALLENGE DAY #2 @everyone 
// 👇🏻 
// #DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
// ==========================
// TAGS: FUNDAMENTALS - STRINGS
// ###############################################################

var dna = "GCATCGTAGCTGCTAGCCGAT" 
function dnaToRNA(str) {
    return dna.replace(/T/g, "U")
}

console.log(dnaToRNA(dna));


function dnaToRNA2(str) {
    let newStr = ""
    for(var i = 0; i < str.length; i++){
        if(str[i] === "T"){
            newStr += "U"
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}

console.log(dnaToRNA2(dna));