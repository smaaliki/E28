<template>
    <div>
        <p>Below is the list of the System Problem Reports (SPRs) that have been reported through the system.</p>
        <div id='SPRs'>
        <h2>SPRs</h2>
        
        </div>
        <table id="firstTable">
  <thead>
    <tr>
        <!--Todo: Improve the sorting functionality: 
            1. Actions column should not be sortable
            2. Clicking again should sort in descending order
            3. Status and Priority should be sorted differently 
        -->
       <th v-for='col in columns' v-on:click='sortTable(col)' :key='col.slug'>{{col}}</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for='spr in sprs' :key='spr.slug'>
      <td>{{ spr.id }}</td>
      <td>{{ spr.title }}</td>
      <td>{{ spr.description }}</td>
      <td>{{ spr.priority }}</td>
      <td>{{ spr.status }}</td>
      <td></td>
    </tr>
      </tbody>
      </table>
    </div>
</template>
<script>
import { sprs } from '@/seeds/sprs.js';

export default {
    name:'',
    components: {   
    },
    data: function() {
        return{
            sprs: sprs,
            columns: ['id', 'title', 'description', 'priority', 'status', 'actions']
        };
    },
    methods: {
    'sortTable': function sortTable(col) {
      this.sprs.sort(function(a, b) {
        if (a[col] > b[col]) {
          return 1;
        } else if (a[col] < b[col]) {
          return  -1;
        }
        return 0;
      })
    }
  }  
}


</script>
<style scoped>
table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
}

table th {
    text-transform: uppercase;
    text-align: left;
    background: #44475C;
    color: #FFF;
    cursor: pointer;
    padding: 8px;
    min-width: 30px;
}
table th:hover {
    background: #717699;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>