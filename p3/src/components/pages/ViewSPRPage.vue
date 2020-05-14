<template>
    <div id='spr-page' v-if='spr'>
        <h1>View SPR</h1>
        <h4>Title</h4>
        <p>{{ spr.title }}</p>

        <h4>URL Identifier</h4>
        <p>{{ spr.slug }}</p>

        <h4>Description</h4>
        <p>{{ spr.description }}</p>

        <h4>Reported By</h4>
        <p>{{ spr.reportedBy }}</p>
        
        <h4>Priority</h4>
        <p>{{ spr.priority }}</p>

        <h4>Type</h4>
        <p>{{ spr.type }}</p>

        <h4>Status</h4>
        <p>{{ spr.status }}</p>

        <br/>

        <p>
            <router-link :to='{name: "SPRs"}'>&larr; Return to SPRs list</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: '',
    props: ['spr'],
    data: function() {
        return {
            spr_status: ['New','Verified','Resolved','Rejected']
        };
    },

};
</script>

<style scoped>
input {
    font-size: 12pt;
}
textarea,
input[type='text'] {
    width: 50%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12pt;
}
textarea {
    height: 75px;
    margin: auto;
}
label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}
input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>