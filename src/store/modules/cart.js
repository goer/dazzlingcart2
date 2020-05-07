import Vue from "vue";

const cart = {
  namespaced: true,
  state: {
    cart: {},
    total:0
  },
  getters: {
    cartSize(state) {
      return state.cart.length;
    },
    getTotal(state){
      var t=0
      return t
    }
  },
  mutations: {

    ADD: (state, p) => {

      console.log("adding ", p);
      var qty = 0
      if(state.cart[p.objectId])
       qty = state.cart[p.objectId].qty
      qty++
      var c = {
        product: p,
        qty: qty
      };
      Vue.set(state.cart, p.objectId, c);

    }
  },
  actions: {
    add(ctx, p) {
      ctx.commit("ADD", p);
    }
  }
};
export default cart;
