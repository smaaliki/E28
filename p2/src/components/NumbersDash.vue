<template>
    <div>
        <div>
            <h2>Priority</h2>
            <p>High: {{ priority[0] }}</p>
            <p>Medium: {{ priority[1] }}</p>
            <p>Low: {{ priority[2] }}</p>
        </div>
        <div>
            <h2>Type</h2>
            <p>New Feature: {{ type[0] }}</p>
            <p>Enhancement: {{ type[1] }}</p>
            <p>Issue: {{ type[2] }}</p>
        </div>
    </div>
</template>
<script>
import * as app from '@/common/app.js';

export default {
    name:'',
    components: {   
    },
    data: function() {
        return{
            //high: 0,
            //medium: 0,
            //low: 0,
            priority: [],
            type: [],
        };
    },
    mounted: function () {
        app.api.count('sprs','priority', 'High').then(response => {
            this.priority[0] = response;
        });
        app.api.count('sprs','priority', 'Medium').then(response => {
            this.priority[1] = response;
        });
        app.api.count('sprs','priority', 'Low').then(response => {
            this.priority[2] = response;
        });
        app.api.count('sprs','type', 'New Feature').then(response => {
            this.type[0] = response;
        });
        app.api.count('sprs','type', 'Enhancement').then(response => {
            this.type[1] = response;
        });
        app.api.count('sprs','type', 'Issue').then(response => {
            this.type[2] = response;
        });
    }        
}
</script>
<style scoped>
</style>