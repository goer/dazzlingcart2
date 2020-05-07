<template>
<div>
  <button class="button m-1">
    <span class="mif-cart"></span>
    <span class="ml-1">My Cart</span>
    <span class="badge bg-blue fg-white">{{cartSize}}</span>
</button>
</div>
</template>
<script>
import {mapGetters } from 'vuex'

export default {
  name: "CartIcon",
  data() {
    return {
      size: 0
    };
  },
  computed:{
    ...mapGetters('cart',[
      'cartSize'
    ])
  }
};
</script>
