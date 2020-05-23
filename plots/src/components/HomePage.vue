<template>
  <div>
    <h1>Plots</h1>
    <data-table></data-table>
    <line-plot></line-plot>
    </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import LinePlot from '@/components/Plot.vue'

//https://www.d3-graph-gallery.com/graph/line_basic.html
export default {
  name: 'Plot',
  components: {
    'data-table': DataTable,
    'line-plot': LinePlot,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

label {
  margin-top: 10px;
}

input {
  margin-top: 10px;
}
button {
  margin-top: 10px;
}

table {
    font-family: 'Open Sans', sans-serif;
    width: 50%;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin-left:auto;
    margin-right:auto;
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
  text-align: center;
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

#data_div{
  width: 50%;
  float: left;
}

#point_div {
  width: 50%;
  margin-left: 25%;
  text-align: left;
}
#plot_div{
  width: 50%;
  float: right;
}
</style>
