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
        
        <!-- Ref: https://codepen.io/yanxyz/pen/pyOQMy -->
        <label for='priority'>Priority:</label>
        <input type='radio' v-model='spr.priority' value='High'>High
        <input type='radio' v-model='spr.priority' value='Medium'>Medium
        <input type='radio' v-model='spr.priority' value='Low'>Low
        <br />

        <label for='type'>Type:</label>
        <input type='radio' v-model='spr.type' value='New Feature'>New Feature
        <input type='radio' v-model='spr.type' value='Enhancement'>Enahncement
        <input type='radio' v-model='spr.type' value='Issue'>Issue
        <br />

        <label for='status'>Status:</label>
        <select v-model='spr.status' id='status' name='status'>
            <option v-for='stat in spr_status' :key='stat.id'>{{ stat }}</option>
        </select>
        <br/>
        <input type='submit' value='Add' @click.prevent='addSPR' />

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
            spr:  {
                index: 0,
                title: '',
                slug: '',
                priority: 'Low',
                status: 'New',
                reportedBy: '',
                type: 'Enhancement',
                description: ''
            },
            spr_status: ['New','Verified','Resolved','Rejected']
        };
    },
    methods: {
        addSPR: function() {
            /* There's got to be a better way to do this */
            app.api.all('sprs').then(response => {
            this.spr.index = response.length+1;
            app.api.add('sprs', this.spr).then(id => {
                console.log('SPR with ID ', id, ' was saved');
                this.saved = true;
                setTimeout(() => (this.saved = false), 3000);
                this.spr = {
                    index: 0,
                    title: '',
                    slug: '',
                    priority: 'Low',
                    status: 'New',
                    reportedBy: '',
                    type: 'Enhancement',
                    description: ''
                };
            });
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