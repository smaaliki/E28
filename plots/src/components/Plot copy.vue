<template>
  <div>
    <h1>Let's Plot with D3.js and Vue!</h1>
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
    <!--<ul>
      <li>npm install d3</li>
    </ul>-->
  <div id='plot_div'>
      <h2>Plot Settings</h2>
    <div>
      <label for='linecolor'>Line Color:</label>
      <input type='color' v-model='settings.lineColor' id='linecolor' />
      <br/>
      
      <label for='linewidth'>Line Width:</label>
      <input type='text' v-model='settings.lineWidth' id='linewidth' />
      <br/>
      
      <input type='submit' value='update' @click.prevent='drawPlot' />
    </div>

    <div>
      <p>Plot Width: {{ plotWidth }}</p>
      <p>Plot Height: {{ plotHeight }}</p>
    </div>

    <div id='my_dataviz'></div>
  </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

//https://www.d3-graph-gallery.com/graph/line_basic.html
export default {
  name: 'Plot',
  data: function() {
    return{
      myData: [ { x: 1, y: 2 }, 
                { x: 2, y: 4 },
                { x: 3, y: 3},
                { x: 4, y: 8},
                { x: 5, y: 7}
                ],
      tempPoint: {x:1, y: 2},
      margin:  {top: 10, right: 30, bottom: 30, left: 60},
      settings: {
        lineColor: "#3333ba",
        lineWidth: 2,
      }
    }
  },
  computed: {
    plotWidth:  function () { 
      return 460 - this.margin.left - this.margin.right;
    },
    plotHeight:  function () { 
      return 400 - this.margin.top - this.margin.bottom;
    }
  },
  mounted: function() {
    this.initializePlot();
  },
  methods: {
    'addPoint': function addPoint() {
      let x= this.tempPoint.x;
      let y= this.tempPoint.y;
      this.myData.push({x,y});
      this.drawPlot();
    },
    'deletePoint': function deletePoint(index) {
      console.log(this.myData);
      this.myData.splice(index,1);
      console.log(this.myData);
      this.drawPlot();
    },
    'initializePlot': function initializePlot() {
      this.svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", this.plotWidth + this.margin.left + this.margin.right)
        .attr("height", this.plotHeight + this.margin.top + this.margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + this.margin.left + "," + this.margin.top + ")");

      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, 5])
        .range([ 0, this.plotWidth ]);

      this.svg.append("g")
        .attr("transform", "translate(0," + this.plotHeight + ")")
        .call(d3.axisBottom(x));
          
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 5])
        .range([ this.plotHeight, 0 ]);

      this.svg.append("g")
        .call(d3.axisLeft(y));
    },
    'drawPlot': function drawPlot() {
          console.log(this.myData.x);
      // Update X axis
      var x = d3.scaleLinear()
        .domain([0, Math.max.apply(null, this.myData.x)])//d3.extent(data, function(d) { return d.date; }))
        .range([ 0, this.plotWidth ]);

      console.log('before x');
      this.svg.selectAll("g.x.axis")
            .call(x);
      console.log('after x');
      
      // Update Y axis
      var y = d3.scaleLinear()
        .domain([0, 10])
        .range([ this.plotHeight, 0 ]);

      this.svg.selectAll("g.y.axis")
            .call(y);

      var path = this.svg.selectAll('path');
      path.datum(this.myData)
          .attr("fill", "none")
          .attr("stroke", this.settings.lineColor)
          .attr("stroke-width", this.settings.lineWidth)
          .attr("d", d3.line()
            .x(function(d) { return x(d.x) })
            .y(function(d) { return y(d.y) })
            );
    }
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
