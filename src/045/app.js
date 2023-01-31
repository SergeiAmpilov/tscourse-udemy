"use strict";
var DeliveryType45;
(function (DeliveryType45) {
    DeliveryType45["Home"] = "Home";
    DeliveryType45["PickUp"] = "PickUp";
})(DeliveryType45 || (DeliveryType45 = {}));
class HomeDelivery {
    constructor(date, adress) {
        this.date = date;
        this.adress = adress;
    }
}
;
class PickUpDelivery {
    constructor(id) {
        this.date = new Date();
        this.pickUpPointId = id;
    }
}
;
class Product45 {
    constructor(name, price) {
        this.id = 1;
        this.name = name;
        this.price = price;
    }
}
class PickUpPoint45 {
}
class Cart45 {
    addToCart(p) {
        // let isInCart: boolean = this.productList.reduce( (acc, item) => {
        //   return acc || item[0].id === p.id;
        // }, false);
        this.productList.push([p, 1]);
    }
    removeProduct(id) {
        this.productList = this.productList.filter(item => item[0].id !== id);
    }
    getSumm() {
        return this.productList.reduce((acc, item) => {
            return acc + item[1] * item[0].price;
        }, 0);
    }
    setDelivery(type, date, adrOrId) {
        if (type == DeliveryType45.Home) {
            this.delivery = new HomeDelivery(date, typeof adrOrId === 'string' ? adrOrId : '');
        }
        else {
            this.delivery = new PickUpDelivery(typeof adrOrId === 'number' ? adrOrId : 0);
        }
    }
    checkOut() {
        return typeof this.delivery !== 'undefined'
            && this.productList.length > 0;
    }
}
