<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{path: '/'}">Vue-cli E-commerce</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{path: '/'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/about'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/contact'}">Contact</router-link>
          </li>
        </ul>
        <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account holder name
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      keyword: ''
    }
  },
  methods: {
    search(){
      let _this = this;
      axios.get('http://localhost:3000/search/' + this.keyword)
      .then(response => {
        
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>
