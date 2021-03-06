import React, { Component } from 'react';
var Chart = require("chart.js")

class Chart1 extends Component {

  constructor(props) {
    super(props);
    this.chart1Ref = React.createRef();
  }

  componentDidMount() {
    this.chart1 = new Chart(this.chart1Ref.current, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Yellow', 'Blue'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['red', 'yellow', 'blue']
        }]
      }
    });
  }

  render() {
    return (
      <canvas className='chart' ref={this.chart1Ref} />
    )
  };

};

export default Chart1;