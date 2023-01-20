enum DeliveryType45 {
  Home = 'Home',
  PickUp = 'PickUp'
}

type HomeDelivery = {
  date: Date,
  adress: string,
};

type PickUpDelivery = {
  date: Date,
  pickUpPointId: number,
};

class Product45 {
  id: number;
  name: string;
  price: number;
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
    if (type == DeliveryType45.Home) {
      this.delivery = {
        adress: typeof adrOrId === 'string' ? adrOrId : '',
        date: date
      }
    } else  {
      this.delivery = {
        date: new Date(),
        pickUpPointId: typeof adrOrId === 'number' ? adrOrId : 0,
      }
    }
  }


  checkOut(): boolean {
    return typeof this.delivery !== 'undefined' 
          && this.productList.length > 0;
  }
}


