class Cart {
  constructor() {
    this.cart = {};
    this.ongkir = 0;
    this.tax = 0;
    this.total = 0;
  }

  list() {
    return this.cart;
  }

  async update(p) {
    console.log("update cart:");
    console.log(p);
    var id = p.objectId;
    console.log("id:" + id);
    if (!this.cart[id])
      this.cart[id] = {
        product: p,
        qty: p.qty
      };
    console.log("add qty");
    this.cart[id].qty++;
    if (this.cart[id].qty <= 0) {
      console.log("try to delete id:" + id);
      delete this.cart[id];
      return false;
    }
    console.log("update done");
    return true;
  }

  async calculate() {
    console.log("calculate");
    this.total = 0;
    console.log(this.cart);
    for (var i in this.cart) {
      var c = this.cart[i];
      this.total += c.qty * c.product.price;
    }
    if (this.tax > 0) this.total += this.total * (this.tax / 100);
    this.total += this.ongkir;
    console.log("total:" + this.total);
    return this.total;
  }

  async sendOrder() {
    //
    console.log("send order");
    console.log(this.cart);
  }
}

module.exports.Cart = Cart;
