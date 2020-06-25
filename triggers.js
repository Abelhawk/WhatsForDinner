let textField = $('#result');

function randomDinner() {
    textField.html(`<p>How about ${dinners[rando(dinners.length)]}?</p>`);
}

function randomDessert() {
    textField.html(`<p>How about ${desserts[rando(desserts.length)]}?</p>`);
}

function randomBreakfast() {
    textField.html(`<p>How about ${breakfasts[rando(breakfasts.length)]}?</p>`);
}

//----------------------------------------------------------------

function rando(probability){
    return Math.floor(Math.random() * probability);
}
