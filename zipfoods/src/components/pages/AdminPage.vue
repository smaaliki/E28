<template>
    <div>
        <h2>Admin</h2>

        <em>
            Disclaimer: This functionality is for demonstration purposes only.
            In a real-world application, this functionality must be locked down to administrators only.
        </em>

        <button @click='clearApi'>Clear API</button>

        <button @click='seedApi'>Seed API</button>

        <div class='alert' v-if='message'>{{ message }}</div>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
// Used for seeding firestore
import { products } from '@/seeds/products.js';
export default {
    name: '',
    data: function() {
        return {
            message: '',
            collections: {
                products: products
            }
        };
    },
    methods: {
        clearApi: function() {
            for (let collectionName in this.collections) {
                app.api.all(collectionName).then(collection => {
                    Object.keys(collection).forEach(key => {
                        app.api.delete(collectionName, key);
                    });
                });
            }
            this.message = 'Clearing API';
        },
        seedApi: function() {
            for (let collectionName in this.collections) {
                for (let key in this.collections[collectionName]) {
                    app.api.add(
                        collectionName,
                        this.collections[collectionName][key]
                    );
                }
            }
            this.message = 'Seeding API';
        }
    }
};
</script>

<style scoped>
button {
    display: block;
    margin: auto;
    margin-top: 10px;
}
</style>