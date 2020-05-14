<template>
  <div>
    <h1>Let's Plot with D3.js and Vue!</h1>
    <data-table></data-table>
  <div id='plot_div'>
      <h2>Plot Settings</h2>
    <div>
      <label for='linecolor'>Line Color:</label>
      <input type='color' v-model='settings.lineColor' id='linecolor' @change='updateLineColor'/>
      <br/>
      
      <label for='linewidth'>Line Width:</label>
      <input type='text' v-model='settings.lineWidth' id='linewidth' @change='updateLineWidth'/>
      <br/>
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
import DataTable from '@/components/Data.vue'

//https://www.d3-graph-gallery.com/graph/line_basic.html
export default {
  name: 'Plot',
  components: {
        'data-table': DataTable
    },
  data: function() {
    return{
      myData: [ { x: 1, y: 2 }, 
                { x: 2, y: 4 },
                { x: 3, y: 3},
                { x: 4, y: 8},
                { x: 5, y: 7}
                ],
      tempPoint: {x:8, y: 12},
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
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.x; }))])
        .range([ 0, this.plotWidth ]).nice();

      this.svg.append("g")
        .attr("class", "xaxis")
        .attr("transform", "translate(0," + this.plotHeight + ")")
        .call(d3.axisBottom(x));
          
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.y; }))])
        .range([ this.plotHeight, 0 ]).nice();

      this.svg.append("g")
        .attr("class", "yaxis")
        .call(d3.axisLeft(y));

      // Add X axis label:
      this.svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", this.plotWidth)
        .attr("y", this.plotHeight + this.margin.top + 20)
        .text("X axis");

      // Y axis label:
      this.svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -this.margin.left+20)
        .attr("x", -this.margin.top)
        .text("Y axis")

      // Add the line
      this.svg.append("path")
        .datum(this.myData)
          .attr("fill", "none")
          .attr("stroke", this.settings.lineColor)
          .attr("stroke-width", this.settings.lineWidth)
          .attr("d", d3.line()
            .x(function(d) { return x(d.x) })
            .y(function(d) { return y(d.y) })
            )
          .attr("class","chartline");
    },
    'drawPlot': function drawPlot() {
      //console.log(Math.max.apply(Math, this.myData.map(function(o) { return o.x; })), Math.max.apply(Math, this.myData.map(function(o) { return o.y; })));
      // Update X axis
      var x = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.x; }))])
        .range([ 0, this.plotWidth ]).nice();

      this.svg.selectAll(".xaxis")
        .call(d3.axisBottom(x));
      
      // Update Y axis
      var y = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.y; }))])
        .range([ this.plotHeight, 0 ]).nice();

      this.svg.selectAll(".yaxis")
        .call(d3.axisLeft(y));

      // Update the chart line.
      var path = this.svg.selectAll(".chartline");

      path.datum(this.myData)
          .attr("fill", "none")
          .attr("stroke", this.settings.lineColor)
          .attr("stroke-width", this.settings.lineWidth)
          .attr("d", d3.line()
            .x(function(d) { return x(d.x) })
            .y(function(d) { return y(d.y) })
            );

      path.exit().remove();
    },
    updateLineColor: function updateLineColor() {
      // Update the chart line color
      var path = this.svg.selectAll(".chartline");

      path.datum(this.myData)
        .attr("fill", "none")
        .attr("stroke", this.settings.lineColor);
      path.exit().remove();
    },
    updateLineWidth: function updateLineWidth() {
      // Update the chart line width
      var path = this.svg.selectAll(".chartline");

      path.datum(this.myData)
        .attr("fill", "none")
        .attr("stroke-width", this.settings.lineWidth)
      path.exit().remove();
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
