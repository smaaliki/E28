<template>
    <div>
        <p>This is the homepage. It will be a landing page at some point</p>

        <!--    <show-featured :category='featuredCategory'></show-featured>-->
        <h1>E28: Project 2</h1>
        <h4>Samer Maaliki</h4>
        <h2>The Idea</h2>
        <p>In this project, I will create an online repository for System Problem Reports (SPR).  
        SPRs can be reported by a system user to report isues that they find while using production
        systems. These are then tracked by Project Managers and devleopers to prioritize the SPRs for resolution.
        </p>
        <div id="features-list">
        <p>System Problem Reports (SPRs) will consist of the following data structure:</p>
        <ul>
            <li>Problem Title</li>
            <li>Problem Description</li>
            <li>Reported by</li>
            <li>Priority: High / Medium / Low</li>
            <li>Status: New / Verified / In Progress / Complete</li>
            <li>Type:Issue / Enhancement
            <li>Resolution</li>
        </ul>
        </div>
        <h2>The Original Plan</h2>
        <p>The plan to complete this project was:
            <ol>
            <li>Create a table with fixed local data (json file) that will display the SPRs</li>
            <li>Add a functionality (button that will trigger a Modal) to add an SPR to a the local data</li>
            <li>Add functionality (Actions column) to Edit or Delete and SPR</li>
            <li>Create a dashboard on the landing page that will summarize the SPRs (maybe a chart?)</li>
            <li>Create a database and link it to the system for saving the SPRs</li>
            </ol>
        </p>
        <h2>The New Plan</h2>
        <p>The plan to complete this project is now as follows:
            <ol>
            <li>Done - Create a table with fixed local data (json file) that will display the SPRs</li>
            <li>Create a database and link it to the system for saving the SPRs</li>
            <li>Add a functionality (button that will trigger a Modal) to add an SPR to the server</li>
            <li>Add functionality (Actions column) to Edit or Delete an SPR</li>
            <li>Create a dashboard page that will summarize the SPRs (maybe a chart?)</li>
            </ol>
        </p>
    </div>
</template>

<script>
//import ShowFeatured from '@/components/ShowFeatured.vue';

export default {
    name:'',
    components: {   
  //      'show-featured': ShowFeatured
    },
    data: function() {
        return{
    //        featuredCategory: 'snacks'
        };
    },

}
</script>
<style scoped>
</style>