<template>
    <div>
        <p>Below is the dashboard regarding the System Problem Reports (SPRs) in the system.</p>
        <numbers-dash></numbers-dash>
    </div>
</template>
<script>
import NumbersDash from '@/components/NumbersDash.vue';

export default {
    name:'',
    components: {   
        'numbers-dash': NumbersDash
    },
    data: function() {
        return{
        };
    },

}
</script>
<style scoped>
</style>