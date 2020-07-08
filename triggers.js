let textField = $('#result');

let dinnersJa = [];
let dessertsJa = [];
let breakfastsJa = [];
let snacksJa = [];

function randomSelection(type) {
    let meal = '';
    let number = -1;
    let newRecipe = false;
    let arrayJa = [];
    let foods;
    let outOfIdeas = "Welp, I'm out of ideas.";
    switch (type) {
        case 'dinner':
            arrayJa = dinnersJa;
            foods = dinners;
            outOfIdeas = "Well, I can't think of anything else. Maybe go out to eat or flip through a cookbook?";
            break;
        case 'dessert':
            arrayJa = dessertsJa;
            foods = desserts;
            outOfIdeas = "Well, I can't think of anything else. Maybe go out to eat or flip through a cookbook?";
            break;
        case 'breakfast':
            arrayJa = breakfastsJa;
            foods = breakfasts;
            outOfIdeas = "Well, I can't think of anything else. Maybe just have cereal?";
            break;
        case 'snack':
            arrayJa = snacksJa;
            foods = snacks;
            outOfIdeas = "Well, I'm out of ideas. Maybe just buy a bag of chips?";
    }
    if (arrayJa.length !== foods.length) {
        while (!newRecipe) {
            number = rando(foods.length);
            newRecipe = true;
            for (let i = 0; i < arrayJa.length; i++) {
                if (arrayJa[i] === number) {
                    newRecipe = false;
                }
            }
        }
        meal = foods[number];
        arrayJa.push(number);
        textField.html(`<p>How about ${meal}?</p>`);
    } else {
        textField.html(`<p class="smaller">${outOfIdeas}</p>`);
    }
}

//----------------------------------------------------------------

function rando(probability) {
    return Math.floor(Math.random() * probability);
}
