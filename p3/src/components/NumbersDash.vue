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

export default {
    name:'',
    components: {   
    },
    data: function() {
        return{
        };
    },
    computed: {
        type: function () {
            let type = [0,0,0];
            Object.keys(this.sprs).map(key => {
                if (this.sprs[key].type == 'New Feature') {
                    type[0]++;
                } else if (this.sprs[key].type == 'Enhancement') {
                    type[1]++;
                } else if (this.sprs[key].type == 'Issue') {
                    type[2]++;
                } 
            });
            return type;
        },
        priority: function () {
            let priority = [0,0,0];
            Object.keys(this.sprs).map(key => {
                if (this.sprs[key].priority == 'High') {
                    priority[0]++;
                } else if (this.sprs[key].priority == 'Medium') {
                    priority[1]++;
                } else if (this.sprs[key].priority == 'Low') {
                    priority[2]++;
                } 
            });
            return priority;
        },
        status: function () {
            let status = [0,0,0,0];
            Object.keys(this.sprs).map(key => {
                if (this.sprs[key].status == 'New') {
                    status[0]++;
                } else if (this.sprs[key].status == 'Verified') {
                    status[1]++;
                } else if (this.sprs[key].status == 'Resolved') {
                    status[2]++;
                } else if (this.sprs[key].status == 'Rejected') {
                    status[3]++;
                } 
            });
            return status;
        },
        sprs: function() {
            return this.$store.state.sprs;
        }
    }        
}
</script>
<style scoped>
</style>