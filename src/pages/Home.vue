<template>
  <div class="container">
    <div data-role="appbar">
      <a href="#" class="brand no-hover">
        <h2>Narikmat.com</h2>
      </a>
      <a href="#" class="brand">Product</a>
      <CartIcon class="right"/>
    </div>

    <Cart/>

    <div v-for="(p,i) in products" :key="i" class="card">
      <div class="card-header">
        <h3 style="left">{{p.name}}</h3>
      </div>

      <div class="card-content p-2">
        <div class="img-container">
          <img :src="p.img" alt>
        </div>
      </div>
      <div class="card-footer">
        <h4>Price: {{p.price}} / {{p.unit}}</h4>
        <div class="right">
          <input type="number" data-role="spinner" style="width: 20px">
          <button class="image-button" @click="add(p)">
            <span class="mif-share icon"></span>
            <span class="caption">Add</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapAction } from "vuex";

import Cart from "../components/Cart.vue";
import CartIcon from "../components/CartIcon.vue";

export default {
  computed: {
    ...mapState("product", {
      products: state => state.products
    })
  },
  components: {
    Cart,
    CartIcon
  },
  async mounted() {},
  methods: {
    add(p) {
      this.$store.dispatch("cart/add", p);
    }
  },
  data() {
    return {};
  }
};
</script>

