<template>
    <ul class="list-group">
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
            <span>{{ item.title }}</span>
            <button class="btn btn-danger btn-sm float-right" @click="removeItem(index)">X</button>
            <span class="float-right">{{ item.price }}</span>
        </li>
        <li class="list-group-item">
            <span>Total:</span>
            <span class="float-right">${{ totalPrice }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        items(){
            return this.$store.getters.getCart;
        },
        totalPrice(){
            var total = 0;
            this.items.forEach(item => {
                total += parseFloat(item.price);
            });
            return total.toFixed(2);
        }
    },
    methods: {
        removeItem(index){
            this.$store.commit('removeItem', index);
        }
    }
}
</script>

<style>

</style>
