<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
      <div class="row mt-15">
        <div class="col-sm-9">
          <div class="card">
            <div class="card-header">
              <h4>Products</h4>
            </div>
            <div class="card-body">
              <inventory @newItemAdded="addCartItem" :items="items"></inventory>
            </div>
          </div>
        </div>
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
import Inventory from './components/Inventory';
import Data from './data.js';

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data(){
    return {
      items: [],
      cart: []
    }
  },
  mounted(){
    this.items = Data;
  },
  methods: {
    addCartItem(item){
      this.cart.push(item);
    }
  }
}
</script>

<style>
.mt-15{
  margin-top: 15px;
}
</style>
