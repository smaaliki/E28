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
h1{
  text-align: left;
  margin-left: 10%;
}
</style>
