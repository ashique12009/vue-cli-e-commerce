<template>
  <div v-if="!loading" class="col-sm-9">
    <div class="card">
      <div class="card-header">
        <h4>Products</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div v-for="(item, index) in items" :key="index" class="card mt-15" style="width: 200px;">
            <router-link :to="{ path: '/item/' + item.id }"><img class="card-img-top cimage" :src="item.photo" alt="Card image cap"></router-link>
            
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.price}}</p>
              <a href="Javascript:void(0)" class="btn btn-sm btn-primary" @click="addToCart(item)">+ Add</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      loading: true
    }
  },
  mounted(){
    this.fetchItem();
  },
  computed: {
    items(){
      return this.$store.getters.getInventory;
    }
  },
  methods: {
    addToCart(item){
      this.$store.commit('addToCart', item);
    },
    fetchItem(){
      let _this = this;
      axios.get('http://localhost:3000/items')
      .then(response => {
        _this.$store.commit('setInventory', response.data);
        _this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
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