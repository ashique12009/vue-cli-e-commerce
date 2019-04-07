<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
      <div class="row custom_row">
        <div class="col-sm-9">
          <inventory></inventory>
        </div>
        <div class="col-sm-3">
          <h4>Cart</h4>
          <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Inventory from './components/Inventory';

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  }
}
</script>

<style>
.custom_row {
   display: flex;
   flex-wrap: wrap;
}
.custom_row > div[class*='col-'] {
  display: flex;
}
</style>
