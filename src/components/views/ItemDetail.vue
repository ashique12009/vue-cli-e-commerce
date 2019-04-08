<template>
    <div v-if="item" class="col-sm-9">
        <div class="card">
            <div class="card-header">
                <h4>Item Detail</h4>
            </div>
            <div class="card-body">
                <div>Item name: {{ item.title }}</div>
                <div>
                    <img :src="item.photo" alt="photo">
                </div>
                <div>Price: {{ item.price }}</div>
                <button class="btn btn-sm btn-primary">+ Add</button>
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
            item: null
        }
    },
    mounted(){
        this.fetchItem();
    },
    methods: {
        fetchItem(){
            let _this = this;
            axios.get('http://localhost:3000/item/' + this.$route.params.id )
            .then(response => {
                _this.item = response.data;
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
