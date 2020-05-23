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
      myData: [ 
                { x: 1, y: 13}, 
                { x: 2, y: 45}, 
                { x: 3, y: 50}, 
                { x: 4, y: 85}, 
                { x: 5, y: 72}, 
                { x: 6, y: 63}, 
                { x: 7, y: 102}, 
                { x: 8, y: 41}, 
                { x: 9, y: 53}, 
                { x: 10, y: 150}, 
                { x: 11, y: 210}, 
                { x: 12, y: 240}, 
                { x: 13, y: 241}, 
                { x: 14, y: 294}, 
                { x: 15, y: 277}, 
                { x: 16, y: 283}, 
                { x: 17, y: 300}, 
                { x: 18, y: 331}, 
                { x: 19, y: 370}, 
                { x: 20, y: 376}, 
                { x: 21, y: 387}, 
                { x: 22, y: 398}, 
                { x: 23, y: 412}, 
                { x: 24, y: 432}, 
                { x: 25, y: 460}, 
                { x: 26, y: 477}, 
                { x: 27, y: 479}, 
                { x: 28, y: 484}, 
                { x: 29, y: 490}, 
                { x: 30, y: 483}, 
                { x: 31, y: 518}, 
                { x: 32, y: 525}, 
                { x: 33, y: 532}, 
                { x: 34, y: 536}, 
                { x: 35, y: 490}, 
                { x: 36, y: 541}, 
                { x: 37, y: 549}, 
                { x: 38, y: 552}, 
                { x: 39, y: 557}, 
                { x: 40, y: 561}, 
                { x: 41, y: 564},
                { x: 42, y: 567},
                { x: 43, y: 462},
                { x: 44, y: 546},
                { x: 45, y: 502},
                { x: 46, y: 553},
                { x: 47, y: 624},
                { x: 48, y: 781},
                { x: 49, y: 680},
                { x: 50, y: 783},
                { x: 51, y: 725},
                { x: 52, y: 698},
                { x: 53, y: 747},
                { x: 54, y: 796},
                { x: 55, y: 731},
                { x: 56, y: 832},
                { x: 57, y: 873}, //19 May
                { x: 58, y: 941},
                { x: 59, y: 894},
                ],
      tempPoint: {x:60, y: 754},
    }
  },
  mounted : function() {
      this.$store.commit('setPlotData', this.myData);
  },  
  methods: {
    'addPoint': function addPoint() {
      let x= this.tempPoint.x;
      let y= this.tempPoint.y;
      this.$store.commit('addDataPoint', {x,y});
    },
    'deletePoint': function deletePoint(index) {
      this.$store.commit('deleteDataPoint', index);
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
