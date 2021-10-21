// Task 1
function counter() {
    let s = 0;
    return function (num) {
        s = s + num;
        console.log(s);
    }
}
let sum = counter();
sum(3)
sum(5)
sum(228)




// Task 2
import * as shop from './shop.js';
console.log(shop.checkBank());
console.log(shop.checkStorage());
console.log(shop.sellBeers(20));
console.log(shop.sellVines(20));
console.log(shop.sellPepsi(20));
console.log(shop.checkBank());
console.log(shop.sellVines(31));
console.log(shop.checkBank());
console.log(shop.sellBeers(-1));
console.log(shop.checkStorage());





