<template>
    <div v-if='msg' class='hint' v-bind:class='{errorClass : !answer}'>
        {{ msg }}
        <button v-if='answer' v-on:click="$emit('reset')">Play again</button>
    </div>
</template>

<script>
export default {
    // ... component options    

    data: function () {
        return {

        }
    },
    template: '#feedback-msg',
    methods: {

    },
    props: {
        answer: {
            type: Boolean,
            default: false
        },
        msg: String,
    },
};
</script>

<!--The scoped option below means the CSS styling will only apply to this component-->
<style scoped>
.hint {
    background-color: green;
    color:white;
}

.errorClass {
    background-color: red;
    color:white;
}
</style>