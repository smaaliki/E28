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
        <input type='radio' v-model='spr.priority' value='High'>High
        <input type='radio' v-model='spr.priority' value='Medium'>Medium
        <input type='radio' v-model='spr.priority' value='Low'>Low
        <br />

        <label for='type'>Type:</label>
        <input type='radio' v-model='spr.type' value='New Feature'>New Feature
        <input type='radio' v-model='spr.type' value='Enhancement'>Enhancement
        <input type='radio' v-model='spr.type' value='Issue'>Issue
        <br />

        <label for='status'>Status:</label>
        <select v-model='spr.status' id='status' name='status'>
            <option v-for='stat in spr_status' :key='stat.id'>{{ stat }}</option>
        </select>
        <br/>
        <input type='submit' value='Save' @click.prevent='saveEdits' />

        <transition name='fade'>
            <div class='alert' v-if='saved'>SPR was saved!</div>
        </transition>

        <p>
            <router-link :to='{name: "SPRs"}'>&larr; Return to SPRs list</router-link>
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
            spr: null,
            spr_status: ['New','Verified','Resolved','Rejected']
        };
    },
    mounted: function () {
        app.api.find('sprs', 'slug', this.slug).then(response => {
            this.spr = response;
        });
    },
    methods: {
        saveEdits: function() {
            app.api.update('sprs', this.spr.slug, this.spr).then(response => {
                this.saved = true;
                setTimeout(() => (this.saved = false), 3000);
        });
        }
    }
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