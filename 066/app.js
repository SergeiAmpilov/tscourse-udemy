"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendedList(List);
const ls66 = new list(['ol', 'ul', 'nav']);
console.log(list);
console.log(ls66, ls66.items, ls66.first());
