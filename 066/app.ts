type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;


class List {
  constructor(public items: string[]) {
  }
}

class Accordion {
  isOpened: boolean;
}



type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

class AccordionList {
  public isOpened: boolean;
  constructor(public items: string[]) {
    this.isOpened = false;
  }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      this.isOpened = true;
      return this.items[0];
    }
  }
}

const list = ExtendedList(AccordionList);
const ls66 = new list(['ol', 'ul', 'nav']);
// console.log(list);
console.log(ls66);
console.log(ls66.first());
console.log(ls66);

// console.log(ls66, ls66.items, ls66.first(), ls66);