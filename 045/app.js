"use strict";
var DeliveryType45;
(function (DeliveryType45) {
    DeliveryType45["Home"] = "Home";
    DeliveryType45["PickUp"] = "PickUp";
})(DeliveryType45 || (DeliveryType45 = {}));
class Product45 {
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
            this.delivery = {
                adress: typeof adrOrId === 'string' ? adrOrId : '',
                date: date
            };
        }
        else {
            this.delivery = {
                date: new Date(),
                pickUpPointId: typeof adrOrId === 'number' ? adrOrId : 0,
            };
        }
    }
    checkOut() {
        return typeof this.delivery !== 'undefined'
            && this.productList.length > 0;
    }
}
