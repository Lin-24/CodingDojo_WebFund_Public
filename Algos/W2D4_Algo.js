var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

//1. console.log the pokémon objects whose id is evenly divisible by 3
console.log("Challenge 1");
for(val of pokemon){
    if(val.id%3 ===0){
        console.log(val);
    }
}

//2. console.log the pokémon objects that have more than one type
console.log("\n\nChallenge 2");
for(val of pokemon){
    if(val.types.length > 1){
        console.log(val);
    }
}

//3. console.log the names of the pokémon whose only type is "poison"
console.log("\n\nChallenge 3");
for(val of pokemon){
    if(val.types.length === 1 && val.types[0] === "poison"){
        console.log(val.name);
    }
}

//4. console.log the first type of all the pokémon whose second type is "flying"
console.log("\n\nChallenge 4");
for(val of pokemon){
    if(val.types.length === 2 && val.types[1] === "flying"){
        console.log(val.types[0]);
    }
}

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
console.log("\n\nBonus Challenge!");
for(val of pokemon){
    if(val.types.length === 1 && val.types[0] === "poison"){
        var revName = ""
        for(var i = val.name.length-1; i >= 0; i--){
            revName += val.name[i]
        }
        console.log(revName);
    }
}
