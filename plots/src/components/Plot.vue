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
    <div>
      <label for='dashLength'>Dash Length:</label>
      <input type='range' id='dashLength' min='1' max='10' step='1' v-model='settings.dashLength' @change='updateLineStyle'> 
      <br/>
      <label for='dashSpace'>Dash Space:</label>
      <input type='range' id='dashSpace' min='0' max='10' step='1' v-model='settings.dashSpace' @change='updateLineStyle'> 
    </div>
    <div>
      <label for='xAxisLabel'>x Axis Label:</label>
      <input type='text' v-model='settings.xAxisLabel' id='xAxisLabel' @change='updatexAxisLabel'/>
      <br/>
      <label for='yAxisLabel'>y Axis Label:</label>
      <input type='text' v-model='settings.yAxisLabel' id='yAxisLabel' @change='updateyAxisLabel'/>
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
      margin:  {top: 10, right: 30, bottom: 40, left: 60},
      settings: {
        lineColor: '#ff0000',
        lineWidth: 2,
        xAxisLabel: 'days',
        yAxisLabel: 'new cases',
        dashLength: 3,
        dashSpace: 3
      }
    }
  },
  computed: {
    plotData () {
        return this.$store.state.plotData;
    },
    plotWidth:  function () { 
      return 600 - this.margin.left - this.margin.right;
    },
    plotHeight:  function () { 
      return 400 - this.margin.top - this.margin.bottom;
    }
  },
  mounted: function() {
    this.initializePlot();
  },
  watch: {
    'plotData': {
      handler: function () {
        this.drawPlot();
      }
    }
  },
  methods: {
    initializePlot: function initializePlot() {
      this.svg = d3.select('#my_dataviz')
      .append('svg')
        .attr('width', this.plotWidth + this.margin.left + this.margin.right)
        .attr('height', this.plotHeight + this.margin.top + this.margin.bottom)
      .append('g')
        .attr('transform',
              'translate(' + this.margin.left + ',' + this.margin.top + ')');

      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.plotData.map(function(o) { return o.x; }))])
        .range([ 0, this.plotWidth ]).nice();

      this.svg.append('g')
        .attr('class', 'xaxis')
        .attr('transform', 'translate(0,' + this.plotHeight + ')')
        .call(d3.axisBottom(x));
          
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.plotData.map(function(o) { return o.y; }))])
        .range([ this.plotHeight, 0 ]).nice();

      this.svg.append('g')
        .attr('class', 'yaxis')
        .call(d3.axisLeft(y));

      // Add X axis label:
      this.svg.append('text')
        .attr('class', 'xaxis-label')
        .attr('text-anchor', 'end')
        .attr('x', this.plotWidth)
        .attr('y', this.plotHeight + this.margin.top + 20)
        .text(this.settings.xAxisLabel);

      // Y axis label:
      this.svg.append('text')
        .attr('class', 'yaxis-label')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -this.margin.left+20)
        .attr('x', -this.margin.top)
        .text(this.settings.yAxisLabel)

      // Add the line
      this.svg.append('path')
        .datum(this.plotData)
          .attr('fill', 'none')
          .attr('stroke', this.settings.lineColor)
          .attr('stroke-width', this.settings.lineWidth)
          .style('stroke-dasharray', ([this.settings.dashLength , this.settings.dashSpace]))
          .attr('d', d3.line()
            .x(function(d) { return x(d.x) })
            .y(function(d) { return y(d.y) })
            )
          .attr('class','chartline');
    },
    'drawPlot': function drawPlot() {
      //console.log(Math.max.apply(Math, this.myData.map(function(o) { return o.x; })), Math.max.apply(Math, this.myData.map(function(o) { return o.y; })));
      // Update X axis
      var x = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.plotData.map(function(o) { return o.x; }))])
        .range([ 0, this.plotWidth ]).nice();

      this.svg.selectAll('.xaxis')
        .call(d3.axisBottom(x));
      
      // Update Y axis
      var y = d3.scaleLinear()
        .domain([0, Math.max.apply(Math, this.plotData.map(function(o) { return o.y; }))])
        .range([ this.plotHeight, 0 ]).nice();

      this.svg.selectAll('.yaxis')
        .call(d3.axisLeft(y));

      // Update the chart line.
      var path = this.svg.selectAll('.chartline');

      path.datum(this.plotData)
          .attr('fill', 'none')
          .attr('stroke', this.settings.lineColor)
          .attr('stroke-width', this.settings.lineWidth)
          .attr('d', d3.line()
            .x(function(d) { return x(d.x) })
            .y(function(d) { return y(d.y) })
            );

      path.exit().remove();
    },
    updateLineColor: function updateLineColor() {
      // Update the chart line color
      var path = this.svg.selectAll('.chartline');

      path.datum(this.plotData)
        .attr('fill', 'none')
        .attr('stroke', this.settings.lineColor);
      path.exit().remove();
    },
    updateLineWidth: function updateLineWidth() {
      // Update the chart line width
      var path = this.svg.selectAll('.chartline');

      path.datum(this.plotData)
        .attr('fill', 'none')
        .attr('stroke-width', this.settings.lineWidth)
      path.exit().remove();
    },
    updateLineStyle: function updateLineStyle() {
      // Update the chart line Style
      var path = this.svg.selectAll('.chartline');

      path.datum(this.plotData)
        .attr('fill', 'none')
        .style('stroke-dasharray', ([this.settings.dashLength , this.settings.dashSpace]))
      path.exit().remove();
    },
    updatexAxisLabel: function updatexAxisLabel() {
      this.svg.select('.xaxis-label').text(this.settings.xAxisLabel);
    },
    updateyAxisLabel: function updateyAxisLabel() {
      this.svg.select('.yaxis-label').text(this.settings.yAxisLabel);
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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

#plot_div{
  width: 50%;
  float: right;
  text-align: left;
}

#my_dataviz {
    margin-top: 40px;
  background-color: rgb(241, 238, 238);
}

</style>
