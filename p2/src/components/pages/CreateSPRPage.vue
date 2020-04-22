<template>
    <div>
        <h1>Add an SPR</h1>
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
        
        <input type='submit' value='Add' @click.prevent='addSPR' />

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
            added: false,
            spr:  {
                title: '',
                    slug: '',
                    priority: '',
                    status: '',
                    reportedBy: '',
                    type: false,
                    description: ''
            }
        };
    },
    methods: {
        addSPR: function() {
            app.api.add('sprs', this.spr).then(id => {
                console.log('SPR was added with the id: ' + id);
                this.added = true;
                setTimeout(() => (this.added = false), 3000);
                this.spr = {
                    title: '',
                    slug: '',
                    priority: '',
                    status: '',
                    reportedBy: '',
                    type: false,
                    description: ''
                };
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