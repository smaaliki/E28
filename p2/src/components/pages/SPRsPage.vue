<template>
    <div>
        <p>Below is the list of the System Problem Reports (SPRs) that have been reported through the system.</p>
        <div id='SPRs'>
        <h2>SPRs</h2>
        <div v-for='spr in sprs'
            :key='spr.slug'
           >
           <p>{{ spr.title }} / {{ spr.status }}</p>
           <p>{{ spr.description }}</p>
           <p>{{ spr.priority }}</p>
           </div>
        <!--<show-product
            v-for='spr in sprs'
            :key='product.slug'
            :spr='spr'
            ></show-product>-->
        </div>
    </div>
</template>
<script>
import { sprs } from '@/seeds/sprs.js';

export default {
    name:'',
    components: {   
    },
    data: function() {
        return{
            sprs: sprs,
        };
    },

}
</script>
<style scoped>
</style>