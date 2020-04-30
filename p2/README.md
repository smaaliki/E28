*Any instructions/notes in italics should be removed from the template before submitting*

# Project 2
+ By: *Samer Maaliki*
+ Production URL: <http://e28p2.ulaila.com>

## Pages summary
*Home Page*: A brief of the project
*SPRs*: A list of SPRs in the database
*Database*: Statistics of the types, priorities and status of the SPRs
*Admin*: Temporary page to seed the database

## SFC summary
*HomePage*
*SPRsPage*
*SPRPage*
*DashboardPage*
*CreateSPRPage*
*AdminPage* 
*NumbersDash*
*App*
 
## Server interaction
*SPRS*: The SPRs page lists all of the SPRS in the system. It allows users to delete an SPR.
*Dashboard*: The dashboard reads through the NubmersDash SFC, the status, priority and type fo each SPR and displays the count of each sub-category.  There is really no need for the NumbersDash component as all of the code could have been performed in the Dashboard, but I wanted to practice the use of child components.   
*SPR*: This page is triggered when a user clicks on the manage icon for an SPR in the SPRs page. It reads the SPR based on the slug that is passed to it and then it uses the set() functionality to update the SPR's info.

## Outside resources
For the SPRs Table and sorting, I followed the example in the following page:
[https://www.developerdrive.com/creating-a-data-table-in-vue-js/](https://www.developerdrive.com/creating-a-data-table-in-vue-js/)

For the database update functionality, I used sample code from the following:
[https://stackoverflow.com/questions/53480572/having-trouble-updating-a-document-in-vue-js-using-firebases-firestore](https://stackoverflow.com/questions/53480572/having-trouble-updating-a-document-in-vue-js-using-firebases-firestore)
          
I used a codepen example for radio buttons:
[https://codepen.io/yanxyz/pen/pyOQMy](https://codepen.io/yanxyz/pen/pyOQMy)

## Notes for instructor
I need to figure out the proper use of *.then()* promise as it casued errors when I didn't use the *response*.
 
**Note:** The admin page is for test reasons only.