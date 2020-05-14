<template>
  <div>
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
    </div>
    <div id='my_plot'></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: '',
  data: function() {
    return{
      margin:  {top: 10, right: 30, bottom: 30, left: 60},
      myData: [ { x: 1, y: 1 }, 
                { x: 2, y: 3 },
                { x: 3, y: 6 },
                { x: 4, y: 2 },
                { x: 5, y: 5 },
                { x: 6, y: 7 }],
      settings: {
        lineColor: '#3333ba',
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
    'initializePlot': function initializePlot() {
      this.svg = d3.select('#my_plot')
      .append('svg')
        .attr('width', this.plotWidth + this.margin.left + this.margin.right)
        .attr('height', this.plotHeight + this.margin.top + this.margin.bottom)
      .append('g')
        .attr('transform',
              'translate(' + this.margin.left + ',' + this.margin.top + ')');

      // Create the x Scale
      var x = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.x; }))])
        .range([ 0, this.plotWidth ]).nice();

      // Add X axis
      this.svg.append('g')
        .attr('class', 'xaxis')
        .attr('transform', 'translate(0,' + this.plotHeight + ')')
        .call(d3.axisBottom(x));
          
      // Add X axis label
      this.svg.append('text')
        .attr('text-anchor', 'end')
        .attr('x', this.plotWidth)
        .attr('y', this.plotHeight + this.margin.top + 20)
        .text('X axis');
        
      // Create the y Scale
      var y = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.y; }))])
        .range([ this.plotHeight, 0 ]).nice();
      
      // Add Y axis
      this.svg.append('g')
        .attr('class', 'yaxis')
        .call(d3.axisLeft(y));

      // Add Y axis label
      this.svg.append('text')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -this.margin.left+20)
        .attr('x', -this.margin.top)
        .text('Y axis');
      
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
label {
  margin-top: 10px;
}

input {
  margin-top: 10px;
}

#plot_div{
  width: 50%;
  float: right;
  text-align: left;
}
</style>