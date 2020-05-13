<template>
    <div>
        <!--    <show-featured :category='featuredCategory'></show-featured>-->
        <h1>E28: Project 3</h1>
        <h2>System Problem Reports</h2>

        <h3>Overview</h3>
        <p>This system is an online repository for System Problem Reports (SPR).  
            Issues that are found while using production systems can be reported by system users.
            These are then tracked by Project Managers and devleopers to prioritize the SPRs for resolution.
        </p>
        <h3>SPR Data Structure</h3>
        <p>Each System Problem Report (SPRs) will consist of the following data structure:</p>
        <ul>
            <li>Problem Title</li>
            <li>Problem Description</li>
            <li>Reported by</li>
            <li>Type: New Feature / Issue / Enhancement
            <li>Priority: High / Medium / Low</li>
            <li>Status: New / Verified / In Progress / Complete</li>
            <li>Resolution</li>
        </ul>
        <h3>Using this system</h3>
        <p>These are the things that you can currently do in the system.</p>
        <ul>
            <li>To view SPRs currently in the system, visit the SPRs page.</li>
            <li>To add an SPR, go to the SPRs page and click on the Add SPR button above the table.</li>
            <li>To edit an SPR, click on the Edit icon for that SPR.</li>
            <li>To delete an SPR, click on the Delete icon for that SPR.</li>
            <li>To view a simple dashboard of the SPRs, go to the Dashboard link in the menu.</li>
            <li>To re-seed the data, visit the <router-link :to='{name:"admin"}'>Admin</router-link> page</li>
        </ul>  
        <h3>Things I'd like to improve:</h3>
        <ul>
            <li>Sorting the columns in the SPR table</li>
            <li>Automatically create the slug based on the title</li>
            <li>Display the SPR info when a user hovers over the SPR title</li>
            <li>Change the dashboard to a graphical one, rather than just numbers</li> 
            <li>Add a filter to filter SPRs in the table</li>
            <li>Add date created, and date resolved for SPRs</li> 
        </ul>
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
h2 {
    color: green;
}
h3 {
    color: darkslategrey;
}
</style>