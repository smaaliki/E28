# Using d3.js with Vue
*By Samer Maaliki*

With [Vue](https://vuejs.org/) offering reactivity in a single page applications, it would be interesting to see how this would integrate with the [d3.js](https://d3js.org/) library. D3 which stands for Data-Driven Documents is defined as "a JavaScript library for manipulating documents based on data."  It is a tool that have been used to present data online in a visual way. It allows developers to create plots and charts and to create dashboards in a very creative way.  It also allows interactivity with plots. 

For this tutorial, we will be developing a simple line chart and delving into how certain settings can be modified 
## Install the D3 Package

The first step you will need to do, after creating a project, is to install the d3 package using npm

```shell
npm install d3
```
To confirm that the install was successful, go to the **node_modules** folder and look for several *d3* folders.

## Getting started

In your component's script section, import the d3 library

```js
import * as d3 from 'd3'
```
The way d3 works is that you create a div in your html and then you add and manipulate graphics in it.

In the component's template, create a div and give it an id:

```html
<div id='my_plot'></div>
```
In the component's data, define a keyed object array called margin.  This will be used to control where the actual plot will be within the div.  It will give us some room for drawing the axis and axis labels.

```js
margin:  {top: 10, right: 30, bottom: 30, left: 60}
```

Now, in the computed section, define two variables: plotWidth and plotHeight.

```javascript
computed: {
  plotWidth:  function () { 
    return 460 - this.margin.left - this.margin.right;
  },
  plotHeight:  function () { 
    return 400 - this.margin.top - this.margin.bottom;
  }
}
```

At this point, you can create the SVG (Scalable Vector Graphic) and added to the div, by using a method and calling it on mount. In the initialize function, we first get the div by its id (*my_plot*).  We then append an *svg* element to it and a *g* (graphic) element. 

```javascript
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
              'translate(' + this.margin.left + ',' + this.margin.top + ')')  
      .append('rect')
        .classed('background', true)
        .attr('width', this.plotWidth )
        .attr('height', this.plotHeight )
        .attr('fill', 'red');
  }
}
```
If everything runs correctly, you should see a red rectangle in the browser.

**Important:** Remove the *rect* section from the code above. Otherwise, it will always be drawn on top of anything that we add later.  Your initializePlot() function should now look like this:

```javascript
'initializePlot': function initializePlot() {
    this.svg = d3.select('#my_plot')
      .append('svg')
        .attr('width', this.plotWidth + this.margin.left + this.margin.right)
        .attr('height', this.plotHeight + this.margin.top + this.margin.bottom)
      .append('g')
        .attr('transform',
              'translate(' + this.margin.left + ',' + this.margin.top + ')');
```

## Adding Axis

To create and add an axis, we first need to create a scale using the d3.ScaleLinear() function. This will take a domain (the target scale) and a range (the pixels that we are working with) and it will automatically create a proper scale for the axis. We will then add a graphical element and give it a class name *(e.g. xaxis)*.  We will tell this element to draw from (0,plotHeight) using the 'transform' attribute. Finally, we will call the d3.axisBottom function and pass the previously created scale.       

To add an axis label, we simply add a text element as shown below.

```js
// Create the x Scale
var xScale = d3.scaleLinear()
  .domain([0, 5])
  .range([ 0, this.plotWidth ]).nice();

// Add X axis
this.svg.append('g')
  .attr('class', 'xaxis')
  .attr('transform', 'translate(0,' + this.plotHeight + ')')
  .call(d3.axisBottom(xScale));

// Add X axis label:
this.svg.append('text')
  .attr('text-anchor', 'end')
  .attr('x', this.plotWidth)
  .attr('y', this.plotHeight + this.margin.top + 20)
  .text('X axis');

// Add Y axis
var yScale = d3.scaleLinear()
  .domain([0, 5])
  .range([ this.plotHeight, 0 ]).nice();

this.svg.append('g')
  .attr('class', 'yaxis')
  .call(d3.axisLeft(yScale));

// Y axis label:
this.svg.append('text')
  .attr('text-anchor', 'end')
  .attr('transform', 'rotate(-90)')
  .attr('y', -this.margin.left+20)
  .attr('x', -this.margin.top)
  .text('Y axis')
```
**Note: In the code above, we hard-coded the domain for both axes to be from 0 to 5. You can play with it and change teh domains to something like 0 to 10 or 12 to 20.  The axis should adjust to what you code it. However, in an ideal world this axis should adjust automatically based on the data.  We will show how to do that later. Make sure to reset the domains to 0 to 5, otherwise, the line that we will plot later might not show up.

## Drawing a Data Line
Now, we are ready to add some data to the plot.  We will first add a simple keyed data array with 5 points. We will also add keyed *settings* array that will contain the lineColor and lineWidth for the plot line.

```js
myData: [ { x: 1, y: 1 }, 
          { x: 2, y: 3 },
          { x: 3, y: 4},
          { x: 4, y: 2},
          { x: 5, y: 5}],
settings: {
  lineColor: "#3333ba",
  lineWidth: 2,
}
```

Next, we will append a *path* element and passing it the data as follows.
```js
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
```
Now you should see a blue line reflecting the data points in the array. If you don't, you probably made a mistake and forgot to reset the domains in the scales as mentioned above.

## Auto Adjusting Axes
Let's modify the data array by changing the 3rd point and adding a 6th point:

```js
myData: [ { x: 1, y: 1 }, 
          { x: 2, y: 3 },
          { x: 3, y: 6 },
          { x: 4, y: 2 },
          { x: 5, y: 5 },
          { x: 6, y: 7 }],
```
If you look at the plot now, you will find that the plot line is 'off the chart' (pun intended!).  That is because we did not adjust the Axes scales to accommodate the higher numbers.  We can manually change the domains to something like '[0,10]', but every time that the data changes we would have to manually change it.  Instead, we can use the maximum values for the x Data and y Data and use it in the domains as follows:

```js
// Create the x Scale
var x = d3.scaleLinear()
  .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.x; }))])
  .range([ 0, this.plotWidth ]).nice();
.
.
.
// Create the y Scale
var y = d3.scaleLinear()
  .domain([0, Math.max.apply(Math, this.myData.map(function(o) { return o.y; }))])
  .range([ this.plotHeight, 0 ]).nice();
```

## Reactive Settings
So far, we've only utilized D3 to plot the data on a simple line plot.  We haven't yet utilized the power of reactivity in Vue.  

Let's imagine that you want to allow users of the page to modify the plot line's color and width. To do that, we will first add two input elements: a color picker for the line color and a text box for the line width. These elements will call functions whenever their value changes. 

```html
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
```
We will add some styling to the elements that we just added:
```css
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
```

Now, let's add the functions in the methods section that will be called when the input elements values change.
```js
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
```

Now, change the line color and see how the plot line's color changes automatically.  Enter a new line width in the input box and hit Enter. The line width should change automatically.

## Conclusion
This is the simplest kind of plot that shows how a D3 plot can be simply and seamlessly modified using Vue's reactivity.  We only showed how to manipulate two of the plot's properties.  However, this can be expanded to handle many more properties (plot background color, axis colors, axis titles, plot size, etc.) Users can be given an option of whether to display the data points as circles or keep it as a simple line like we showed.   

To take it to another level, we added a data table to the page so that users can add or delete data points which triggers an update to the plot. A working sample can be found [here](http://e28plots.ulaila.com/).  The git for that project can be found [here](https://github.com/smaaliki/E28/tree/master/plots).  The data table is in a component on its own. The data gets updated and passed to the 

Finally, users could be offered a way to change the chart type.  For example, they can easily plot the same data using a bar chart instead of a line chart.

## References:
For finding the maximum in an array of keyed objects:
https://jsfiddle.net/45c5r246/

For the plot, I relied on this library of different templates that shows the code for creating different kinds of plots and graphics:
https://www.d3-graph-gallery.com/index.html

