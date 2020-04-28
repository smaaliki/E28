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
            priority: [0,0,0],
            type: [0,0,0],
        };
    },
    mounted: function () {
        
        /* Reset the priority and update */
        this.priority = [];
        app.api.count('sprs','priority', 'High').then(response => {
            this.priority.push(response);
        });
        app.api.count('sprs','priority', 'Medium').then(response => {
            this.priority.push(response);
        });
        app.api.count('sprs','priority', 'Low').then(response => {
            this.priority.push(response);
        });

        /* Reset the types and update */
        this.type = [];
        app.api.count('sprs','type', 'New Feature').then(response => {
            this.type.push(response);
        });
        app.api.count('sprs','type', 'Enhancement').then(response => {
            this.type.push(response);
        });
        app.api.count('sprs','type', 'Issue').then(response => {
            this.type.push(response);
        });
    }        
}
</script>
<style scoped>
</style>