<template>
  <div id="app">
    <navbar @search="search"></navbar>

    <div class="container">
      <div class="row mt-15">

        <router-view></router-view>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-header">
              <h4>Cart</h4>
            </div>
            <div class="card-body">
              <cart :items="cart"></cart>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Cart from './components/Cart';

export default {
  components: {
    Navbar,
    Cart
  },
  data(){
    return {
      items: [],
      cart: []
    }
  },
  mounted(){
    
  },
  methods: {
    addCartItem(item){
      this.cart.push(item);
    },
    search(keyword){
      this.items = Data.filter(item => {
        return item.product_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
  }
}
</script>

<style>
.mt-15{
  margin-top: 15px;
}
</style>
