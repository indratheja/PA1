import { Menu } from './menu.js';

class Item extends Menu {
    get location() {
        return 'Blue cross';
    }

    constructor(restaurant, price) {
        super(restaurant, price);
    }
}

let alpha = new Item('PISTA', 700);

console.log(alpha);
console.log(alpha.location);