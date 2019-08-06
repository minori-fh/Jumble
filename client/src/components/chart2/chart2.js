// import React, {Component} from 'react';
// var Chart = require("chart.js")

// class Chart2 extends Component {

//     constructor(props){
//         super(props);
//         this.chart2Ref = React.createRef(); 
//     }

//     componentDidMount() {
//         this.chart2 = new Chart(this.chart2Ref.current, {
//             type: 'line',
//             options: {
//               scales: {
//                 xAxes: [
//                   {
//                     type: 'time',
//                     time: {
//                       unit: 'day'
//                     }
//                   }
//                 ],
//                 yAxes: [
//                   {
//                     ticks: {
//                       min: 0,
//                       max: 100
//                     }
//                   }
//                 ]
//               }
//             },
//             data: {
//               labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//               datasets: [{
//                 label: ["Progress (%)"],
//                 data: [10, 25, 50, 46, 60],
//                 fill: 'none',
//                 backgroundColor: "#3E517A",
//                 pointRadius: 2,
//                 borderColor: "#3E517A",
//                 borderWidth: 1,
//                 lineTension: 0
//               }]
//             }
//           });
//       }

//     render(){
//         return(
//             <canvas className = 'chart' ref={this.chart2Ref}/>
//         )
//     };

// };

// export default Chart2;