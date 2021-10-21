
let beerCount = 100;
let beerPrice = 30;
let vineCount = 50;
let vinePrice = 120;
let pepsiCount = 80;
let pepsiPrice = 15;
let bank = 1000;

function checkBank() {
    return `Каса: ${bank} грн`
}

function checkStorage() {
    return `Пива залишилось: ${beerCount} шт\nВина залишилось: ${vineCount} шт\nПепсі залишилось: ${pepsiCount} шт`
}

function sellBeers(count) {
    if (count <= beerCount && count > 0) {
        beerCount -= count;
        bank += count * beerPrice;
        return `Пиво: ${count} шт, вартість ${count * beerPrice} грн`
    }
    else if (count < 0) {
        return `Вибачте але повернути товар не можливо`
    }
    return `Вибачте але на складі залишилось пива ${beerCount} шт`
}
function sellVines(count) {
    if (count <= vineCount && count > 0) {
        vineCount -= count;
        bank += count * vinePrice;
        return `Вино: ${count} шт, вартість ${count * vinePrice} грн`
    }
    else if (count < 0) {
        return `Вибачте але повернути товар не можливо`
    }
    return `Вибачте але на складі залишилось вина ${vineCount} шт`
}
function sellPepsi(count) {
    if (count <= pepsiCount && count > 0) {
        pepsiCount -= count;
        bank += count * pepsiPrice;
        return `Пепсі: ${count} шт, вартість ${count * pepsiPrice} грн`
    }
    else if (count < 0) {
        return `Вибачте але повернути товар не можливо`
    }
    return `Вибачте але на складі залишилось пепсі ${pepsiCount} шт`
}

export { checkBank, checkStorage, sellBeers, sellVines, sellPepsi };
