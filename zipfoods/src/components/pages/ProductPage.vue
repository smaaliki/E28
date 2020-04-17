<template>
    <div id='product-page' v-if='product'>
        <h1>{{ product.name }}</h1>
        <img
            class='product-thumb'
            :alt='"Product image of  " + product.name'
            :src='require("@/assets/images/products/" + product.id + ".jpg")'
        />
        <p class='description'>{{ product.description }}</p>
        <div class='price'>${{ product.price }}</div>

        <router-link :to='{name: "products"}'>&larr; Return to all products</router-link>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: '',
    props: ['id'],
    data: function() {
        return {
            //id: this.$route.params.id,
            product: null
        };
    },
    mounted: function() {
        console.log(this.name);
        axios
            .get(
                'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products/' +
                    this.id
            )
            .then(response => {
                this.product = response.data;
            });
    }
};
</script>

<style scoped>
</style>