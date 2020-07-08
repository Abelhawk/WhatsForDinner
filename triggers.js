let textField = $('#result');

let dinnersJa = [];
let dessertsJa = [];
let breakfastsJa = [];
let snacksJa = [];

function randomDinner() {
    let meal = "";
    let number = -1;
    let newRecipe = false;
    if (dinnersJa.length !== dinners.length) {
        while (!newRecipe) {
            number = rando(dinners.length);
            newRecipe = true;
            for (let i = 0; i < dinnersJa.length; i++) {
                if (dinnersJa[i] === number) {
                    newRecipe = false;
                }
            }
        }
        meal = dinners[number];
        dinnersJa.push(number);
        textField.html(`<p>How about ${meal}?</p>`);
    } else {
        textField.html(`<p class="smaller">Well, I can't think of anything else. Maybe go out to eat or flip through a cookbook?</p>`);
    }
}

function randomDessert() {
    let meal = "";
    let number = -1;
    let newRecipe = false;
    if (dessertsJa.length !== desserts.length) {
        while (!newRecipe) {
            number = rando(desserts.length);
            newRecipe = true;
            for (let i = 0; i < dessertsJa.length; i++) {
                if (dessertsJa[i] === number) {
                    newRecipe = false;
                }
            }
        }
        meal = desserts[number];
        dessertsJa.push(number);
        textField.html(`<p>How about ${meal}?</p>`);
    } else {
        textField.html(`<p class="smaller">Well, I can't think of anything else. Maybe go to a bakery or flip through a cookbook?</p>`);
    }
}

function randomBreakfast() {
    let meal = "";
    let number = -1;
    let newRecipe = false;
    if (breakfastsJa.length !== breakfasts.length) {
        while (!newRecipe) {
            number = rando(breakfasts.length);
            newRecipe = true;
            for (let i = 0; i < breakfastsJa.length; i++) {
                if (breakfastsJa[i] === number) {
                    newRecipe = false;
                }
            }
        }
        meal = breakfasts[number];
        breakfastsJa.push(number);
        textField.html(`<p>How about ${meal}?</p>`);
    } else {
        textField.html(`<p class="smaller">Well, I can't think of anything else. Maybe just have cereal?</p>`);
    }
}

function randomSnack() {
    let meal = "";
    let number = -1;
    let newRecipe = false;
    if (snacksJa.length !== snacks.length) {
        while (!newRecipe) {
            number = rando(snacks.length);
            newRecipe = true;
            for (let i = 0; i < snacksJa.length; i++) {
                if (snacksJa[i] === number) {
                    newRecipe = false;
                }
            }
        }
        meal = snacks[number];
        snacksJa.push(number);
        textField.html(`<p>How about ${meal}?</p>`);
    } else {
        textField.html(`<p class="smaller">Well, I'm out of ideas. Maybe just buy a bag of chips?</p>`);
    }
}

//----------------------------------------------------------------

function rando(probability) {
    return Math.floor(Math.random() * probability);
}
