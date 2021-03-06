//Now let's determine the size of the plots
var margin = {t:200,r:200,b:300,l:200},
    width = $('.canvas').width() - margin.l - margin.r,
    height = $('.canvas').height() - margin.t - margin.b;

//Set up SVG drawing elements
var canvas = d3.select('.canvas')
    .append('svg')
    .attr('width', width + margin.l + margin.r)
    .attr('height', height + margin.t + margin.b)
    .append('g')
    .attr('transform','translate('+margin.l+','+margin.t+')');

console.log("Start to load data...")

//Now we have load in data
//...
d3.csv('data/data.csv',
    function(d){
        //accessor function
        //is run for every row in the table
        //with d representing unparsed, unchanged row as is
        //whatever we return is going to replace that
        return {
          x: +d.x,
          y: +d.y,
          r: +d.r
        };
    },
    function(error,rows){
        console.log("Data is loaded");
        draw(rows)
    });

function draw(rows){
    console.log("Starting drawing with data");
    console.log(rows);
}


