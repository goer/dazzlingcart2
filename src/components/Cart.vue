<template>
  <div>
    <h2>Cart</h2>

    <ul>
      <li v-for="(c,i) in list" :key="i">
        <span>{{c.product.name}} {{c.qty}}/{{c.product.unit}} x {{c.product.price}} = {{c.product.price*c.qty}}</span>
      </li>
      <li>Total : {{getTotal}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapAction, mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", {
      list: state => state.cart
    }),
    getTotal(){
        var t=0
        console.log(this.list)
        var l = Object.keys(this.list).length
        console.log(l)
        if(l==0) return t
 //       if(!this.list) return t
        for(var k in this.list){
          var c = this.list[k]  
          t += c.qty * c.product.price
        }      
        return t
    }
  }
};
</script>

