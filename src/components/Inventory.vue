<template>
  <div class="row">
    <div v-for="(item, index) in items" :key="index" class="card mt-15" style="width: 200px;">
      <img class="card-img-top cimage" :src="item.product_image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.product_name}}</h5>
        <p class="card-text">{{item.price}}</p>
        <a href="Javascript:void(0)" class="btn btn-sm btn-primary" @click="addToCart(item)">+ Add</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    addToCart(item){
      this.$emit('newItemAdded', item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cimage{
    width: 198px;
    height: 150px;
  }
</style>
