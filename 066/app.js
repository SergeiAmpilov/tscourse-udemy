"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
class AccordionList {
    constructor(items) {
        this.items = items;
        this.isOpened = false;
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            this.isOpened = true;
            return this.items[0];
        }
    };
}
const list = ExtendedList(AccordionList);
const ls66 = new list(['ol', 'ul', 'nav']);
// console.log(list);
console.log(ls66);
console.log(ls66.first());
console.log(ls66);
// console.log(ls66, ls66.items, ls66.first(), ls66);
