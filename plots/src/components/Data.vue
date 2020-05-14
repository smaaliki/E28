<template>
  <div>
    <div id='data_div'>
      <h2>Our data is</h2>
      <table>
        <thead id="dataTable">
          <th>index</th>
          <th>x Data</th>
          <th>y Data</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr v-for='(data,index) in myData' :key='index'>
            <td>{{ index+1 }}</td>
            <td>{{ data.x }}</td>
            <td>{{ data.y }}</td>
            <td>
              <!--<img alt='edit data point' id='icon' src='@/assets/images/edit.png' v-on:click='editPoint(index)'/>-->
              <img alt='delete data point' id='icon' src='@/assets/images/delete.png' v-on:click='deletePoint(index)'/>
            </td>
          </tr>
        </tbody>
      </table>
      <div id='point_div'>
      <label for='xpoint'>x:</label>
      <input type='text' v-model='tempPoint.x' id='xpoint' />
      <br/>
      
      <label for='ypoint'>y:</label>
      <input type='text' v-model='tempPoint.y' id='ypoint' />
      <br/>
      <button @click.prevent='addPoint'>Add Point</button>
      </div>
    </div>
  </div>
</template>

<script>
//import * as d3 from 'd3'

//https://www.d3-graph-gallery.com/graph/line_basic.html
export default {
  name: 'Data',
  data: function() {
    return{
      myData: [ { x: 1, y: 2 }, 
                { x: 2, y: 4 },
                { x: 3, y: 3},
                { x: 4, y: 8},
                { x: 5, y: 7}
                ],
      tempPoint: {x:8, y: 12},
    }
  },  
  methods: {
    'addPoint': function addPoint() {
      let x= this.tempPoint.x;
      let y= this.tempPoint.y;
      this.myData.push({x,y});
    },
    'deletePoint': function deletePoint(index) {
      this.myData.splice(index,1);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
