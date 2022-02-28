function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings = toppings;
        return pizza;
}


var pizza1 = pizzaOven("Thin", "Marinara", ["Buffalo Mozzarella", "Parmesan"],["Tomato", "Oregano", "Chilli Oil"]);
var pizza2 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"],["Pepperoni", "Sausage"]);
var pizza3 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"],["Mushrooms", "Olives", "Onions"]);
var pizza4 = pizzaOven("NY Style", "Traditional", ["Mozzarella"],["Pepperoni"]);
var pizzaRay = [pizza1, pizza2, pizza3, pizza4]

console.log("Menu: \n", pizzaRay);

function randomPizza(pizzaRay) {
    var randoPick = Math.floor(Math.random()*pizzaRay.length)
    return pizzaRay[randoPick]
}

console.log("Pizza of the day: \n", randomPizza(pizzaRay));
