<template>
    <div id='spr-page' v-if='spr'>
        <h1>View SPR</h1>
        <label for='title'>Title</label>
        <input type='text' v-model='spr.title' id='title' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='spr.slug' id='slug' />

        <label for='description'>Description:</label>
        <textarea v-model='spr.description' id='description'></textarea>

        <label for='reportedBy'>Reported By:</label>
        <input type='text' v-model='spr.reportedBy' id='reportedBy' />

        <label for='priority'>Priority:</label>
        <input type='text' v-model='spr.priority' id='priority' />

        <label for='type'>Type:</label>
        <input type='text' v-model='spr.type' id='type' />

        <label for='status'>Status:</label>
        <input type='text' v-model='spr.status' id='status' />
        
        <input type='submit' value='Save' @click.prevent='saveEdits' />

        <transition name='fade'>
            <div class='alert' v-if='saved'>SPR was saved!</div>
        </transition>

        <p>
            <router-link :to='{name: "sprs"}'>&larr; Return to SPRs list</router-link>
        </p>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            saved: false,
            spr: null
        };
    },
    mounted: function () {
        app.api.get('sprs', this.slug).then(response => {
        this.spr = response;
    });
    },
    methods: {
        saveEdits: function() {
            app.api.save('sprs', this.spr).then(response => {
                console.log('SPR was saved', response);
                this.saved = true;
                setTimeout(() => (this.saved = false), 3000);
        });
        }
}
};
</script>

<style scoped>
input {
    font-size: 15pt;
}
textarea,
input[type='text'] {
    width: 50%;
}
textarea {
    height: 75px;
    display: block;
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