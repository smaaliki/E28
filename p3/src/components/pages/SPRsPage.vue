<template>
    <div>
        <!-- Todo: Add filter functionality -->
        <p>Below is the list of the System Problem Reports (SPRs) that have been reported through the system.</p>
        <div id='SPRs'>
        <h2 style='float:left'>SPRs</h2>
        <router-link :to='{name:"add an spr"}'><button style='float:right'>Add SPR</button></router-link>
        </div>
        <table id="firstTable">
            <thead>
                    <!-- Todo: Improve the sorting functionality: 
                        1. Actions column should not be sortable
                        2. Clicking again should sort in descending order
                        3. Status and Priority should be sorted differently 
                    -->
<!--                <th v-for='col in columns' v-on:click='sortTable(col)' :key='col.slug'>{{ col }}</th>-->
                <th v-for='col in columns' :key='col.slug'>{{ col }}</th>
            </thead>
            <tbody>
                <tr v-for='spr in sprs' :key='spr.id'>
                <td>SPR_{{spr.index}}</td>
                <td>{{ spr.title }}</td>
                <td>{{ spr.description }}</td>
                <td>{{ spr.priority }}</td>
                <td>{{ spr.status }}</td>
                <td><router-link :to='{name:"spr", params: {slug: spr.slug}}'><img alt='edit spr' id='icon' src='@/assets/images/edit.png'></router-link>
                    <img alt='delete spr' id='icon' src='@/assets/images/delete.png' v-on:click='deleteSPR(spr.id)'/></td>
                </tr>
            </tbody>
        </table>
    <div> 
      Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    </div>
</template>
<script>
import * as app from '@/common/app.js';

export default {
    name:'',
    components: {   
    },
    data: function() {
        return{
            myIndex: 0,
            sprs: [],
            columns: ['id', 'title', 'description', 'priority', 'status', 'actions'],
            ascending: false,
            sortColumn: '',
    };
    },
    mounted: function () {
         app.api.all('sprs').then(response => {
            this.sprs = response;
        });
    },
    methods: {
    /*'sortTable': function sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      console.log("Sorting", this.sortColumn, this.ascending);
      console.log(this.sprs);
      this.sprs.items.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    },*/
    'deleteSPR': function deleteSPR(id) {
      app.api.delete('sprs', id);
      app.api.all('sprs').then(response => {
            this.sprs = response;
        });
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
/*
table th:hover {
    background: #717699;
}
*/
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

#icon {
  width: 25px;
  margin-right: 10px;
}
</style>

