<template>
  <div>
    <p>Hello!</p>
    <ul>
      <li>npm install d3</li>
    </ul>
    <p>Let's plot...</p>
    <p>Our data is</p>
    <ul>
      <li v-for='(data,index) in xData' :key='data'>
        ({{ data }}, {{yData[index]}})
      </li>
    </ul>
    <p>Plot Width: {{ plotWidth }}</p>
    <p>Plot Height: {{ plotHeight }}</p>
    <div id="my_dataviz"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

//https://www.d3-graph-gallery.com/graph/line_basic.html
export default {
  name: 'Plot',
  data: function() {
        return{
      xData: [1,2,3,4,5],
      yData: [2,4,6,8,10],
      myData: [ { x: 1, y: 2 }, 
                { x: 2, y: 4 },
                { x: 3, y: 6},
                { x: 4, y: 8},
                { x: 5, y: 10}
                ],
      margin:  {top: 10, right: 30, bottom: 30, left: 60},
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
  console.log(this.myData);
  this.myData.forEach(function(d) {
 d.x = +d.x;
 d.y = +d.y;
});
console.log(this.myData);
  this.svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", this.plotWidth + this.margin.left + this.margin.right)
    .attr("height", this.plotHeight + this.margin.top + this.margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")");
/*          .append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "pink");
*/
        // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([0, 5])//d3.extent(data, function(d) { return d.date; }))
      .range([ 0, this.plotWidth ]);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.plotHeight + ")")
      .call(d3.axisBottom(x));
      
    // Add Y axis
    console.log(d3.max(this.yData));
    var y = d3.scaleLinear()
      //.domain([0, d3.max(this.yData)])
      .domain([0, 10])
      .range([ this.plotHeight, 0 ]);
      //console.log(y);
    this.svg.append("g")
      .call(d3.axisLeft(y));

this.svg.append("path")
      .datum(this.myData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
        )


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
