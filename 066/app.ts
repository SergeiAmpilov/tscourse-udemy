type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;


class List {
  constructor(public items: string[]) {
  }
}



type ListType = GConstructor<List>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends ListType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  }
}

const list = ExtendedList(List);
const ls66 = new list(['ol', 'ul', 'nav']);
console.log(list);
console.log(ls66, ls66.items, ls66.first());