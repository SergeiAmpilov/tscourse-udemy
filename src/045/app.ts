enum DeliveryType45 {
  Home = 'Home',
  PickUp = 'PickUp'
}

class HomeDelivery {
  date: Date;
  adress: string;

  constructor(date: Date, adress: string) {
    this.date = date;
    this.adress = adress;
  }
};

class PickUpDelivery {
  date: Date = new Date();
  pickUpPointId: number;

  constructor(id: number) {
    this.pickUpPointId = id;
  }
};

class Product45 {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.id = 1;
    this.name = name;
    this.price = price;
  }
}

class PickUpPoint45 {
  id: number;
  name: string;
}


class Cart45 {
  private productList: [Product45, number][];
  private delivery: undefined | HomeDelivery | PickUpDelivery;

  addToCart(p: Product45) {

    // let isInCart: boolean = this.productList.reduce( (acc, item) => {
    //   return acc || item[0].id === p.id;
    // }, false);

    this.productList.push([p, 1]);
  }

  removeProduct(id: number): void {
    this.productList = this.productList.filter(
      item => item[0].id !== id
    );
  }

  getSumm(): number {
    return this.productList.reduce( (acc, item) => {
      return acc+ item[1] * item[0].price
    }, 0);
  }

  setDelivery(type: DeliveryType45, date: Date, adrOrId: number | string): void {
    
    if (type == DeliveryType45.Home ) {
      this.delivery = new HomeDelivery(date, 
        typeof adrOrId === 'string' ? adrOrId : '');
    } else  {
      this.delivery = new PickUpDelivery(typeof adrOrId === 'number' ? adrOrId : 0);
    }
  }


  checkOut(): boolean {
    return typeof this.delivery !== 'undefined' 
          && this.productList.length > 0;
  }
}


