<template>
    <div>
        <h1>Add an SPR</h1>
        
        <!--title-->
        <label for='title'>Title</label>
        <input 
            type='text' 
            v-model='$v.spr.title.$model' 
            id='title'
            data-test='spr-title-input'
            :class='{ "form-input-error": $v.spr.title.$error }' 
        />
        <small class='form-help'>Min: 5 chars</small>

        <div v-if='$v.spr.title.$error'>
            <div
                class='form-feedback-error'
                v-if='!$v.spr.title.required'
            >SPR title is required.</div>

            <div
                class='form-feedback-error'
                v-if='!$v.spr.title.minLength'
            >SPR title must be at least 5 characters long.</div>

        </div>

        <!--slug-->
        <label for='slug'>URL Identifier:</label>
        <input 
            type='text' 
            v-model='$v.spr.slug.$model' 
            id='slug' 
            data-test='spr-slug-input'
            :class='{ "form-input-error": $v.spr.slug.$error }' 
        />
        <small class='form-help'>Min: 5 chars</small>

        <div v-if='$v.spr.slug.$error'>
            <div
                class='form-feedback-error'
                v-if='!$v.spr.slug.required'
            >SPR slug is required.</div>

            <div
                class='form-feedback-error'
                v-if='!$v.spr.slug.minLength'
            >SPR slug must be at least 5 characters long.</div>

            <div
                class='form-feedback-error'
                v-else-if='!$v.spr.slug.doesNotExist'
            >This URL identifier is not available.</div>
        </div>

        <!--description-->
        <label for='description'>Description:</label>
        <textarea 
            v-model='$v.spr.description.$model' 
            id='description'
            data-test='spr-description-textarea'
            :class='{ "form-input-error": $v.spr.description.$error }' 
        ></textarea>
        <small class='form-help'>Min: 25 chars</small>

        <div v-if='$v.spr.description.$error'>
            <div
                class='form-feedback-error'
                v-if='!$v.spr.description.required'
            >SPR description is required.</div>

            <div
                class='form-feedback-error'
                v-if='!$v.spr.description.minLength'
            >SPR description must be at least 25 characters long.</div>

        </div>

        <!--reportedBy-->
        <label for='reportedBy'>Reported By:</label>
        <input 
            type='text' 
            v-model='$v.spr.reportedBy.$model' 
            id='reportedBy' 
            data-test='spr-reportedBy-input'
            :class='{ "form-input-error": $v.spr.reportedBy.$error }' 
        />
        <small class='form-help'>Min: 25 chars</small>

        <div v-if='$v.spr.reportedBy.$error'>
            <div
                class='form-feedback-error'
                v-if='!$v.spr.reportedBy.required'
            >SPR reportedBy is required.</div>

            <div
                class='form-feedback-error'
                v-if='!$v.spr.reportedBy.minLength'
            >SPR reportedBy must be at least 25 characters long.</div>

        </div>

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
        <button data-test='add-spr-button' @click.prevent='addSPR'>Add SPR</button>

        <div class='form-feedback-error' v-if='$v.$anyError'>Please correct the above errors</div>
        
        <transition name='fade'>
            <div data-test="spr-added-confirmation" class='alert' v-if='saved'>SPR was saved!</div>
        </transition>

        <p>
            <router-link data-test='return-to-sprs' :to='{name: "SPRs"}'>&larr; Return to SPRs list</router-link>
        </p>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength } from 'vuelidate/lib/validators';

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
    validations: {
        spr: {
            title: {
                required,
                minLength: minLength(5)
            },
            slug: {
                required,
                minLength: minLength(5),
                doesNotExist(value) {
                    return !this.$store.getters.getSPRBySlug(value);
                }
            },
            reportedBy: {
                required,
                minLength: minLength(5)
            },
            description: {
                required,
                minLength: minLength(25)
            }
        }
    },
    methods: {
        addSPR: function() {
            // Invoke this touch method to force the validation system to register errors even if the user hasn't interacted with any of the fields yet.
            this.$v.$touch();

            // Only add the product if we don't have any errors
            if (this.$v.$anyError == false) {

                // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
                this.$v.$reset();
                
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
                    this.$store.commit('updateSPRCount', 1);
                    this.$store.dispatch('setSPRs');
                });
            }
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