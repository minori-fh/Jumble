import React from 'react';
var Chart = require("chart.js")

var ctx = document.getElementById("chart1")

var data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};

var Chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

function Chart1(){

    return(
        <div>
            <canvas className = 'chart' id='chart1'>
            </canvas>
        </div>
    )
}

export default Chart1