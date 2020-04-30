<template>
    <div>
        <!--todo: make these lists dynamic-->
        <div>
            <h2>Type</h2>
            <p>New Feature: {{ type[0] }}</p>
            <p>Enhancement: {{ type[1] }}</p>
            <p>Issue: {{ type[2] }}</p>
        </div>
        <div>
            <h2>Priority</h2>
            <p>High: {{ priority[0] }}</p>
            <p>Medium: {{ priority[1] }}</p>
            <p>Low: {{ priority[2] }}</p>
        </div>
        <div>
            <h2>Status</h2>
            <p>New: {{ status[0] }}</p>
            <p>Verified: {{ status[1] }}</p>
            <p>Resolved: {{ status[2] }}</p>
            <p>Rejected: {{ status[3] }}</p>
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
            type: [0,0,0],
            priority: [0,0,0],
            status: [0,0,0,0],
        };
    },
    mounted: function () {
        
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

        /* Reset the status and update */
        this.status = [];
        app.api.count('sprs','status', 'New').then(response => {
            this.status.push(response);
        });
        app.api.count('sprs','status', 'Verified').then(response => {
            this.status.push(response);
        });
        app.api.count('sprs','status', 'Resolved').then(response => {
            this.status.push(response);
        });
        app.api.count('sprs','status', 'Rejected').then(response => {
            this.status.push(response);
        });
    }        
}
</script>
<style scoped>
</style>