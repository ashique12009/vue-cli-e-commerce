<template>
    <ul class="list-group">
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
            <span>{{ item.product_name }}</span>
            <span class="float-right">{{ item.price }}</span>
        </li>
        <li class="list-group-item"><span>Total:</span><span class="float-right">${{ totalPrice }}</span></li>
    </ul>
</template>

<script>
export default {
    props: ['items'],
    computed: {
        totalPrice(){
            var total = 0;
            this.items.forEach(item => {
                var onlyPrice = item.price.split('$')
                total += parseFloat(onlyPrice[1]);
            });
            return total.toFixed(2);
        }
    }
}
</script>

<style>

</style>
