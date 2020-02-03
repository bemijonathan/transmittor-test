import React, { Component } from 'react'
import Chart from 'chart.js'


export default class SmallChart extends Component {



    componentDidMount() {
        let ctx = document.getElementById(this.props.values.name).getContext('2d');

        const gradient = ctx.createLinearGradient(2, 148, 255, 0.126274);
        gradient.addColorStop(0, 'rgba(2, 148, 255, 0.126274)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0001)');

        // background: linear-gradient(180deg, rgba(2, 148, 255, 0.126274) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo", "New York", "Karachi", "Buenos Aires", "Delhi", "Moscow"],
                datasets: [{
                    label: 'Series 1',
                    data: [10, 50, 24, 40, 41, 11, 44, 47, 55, 68],
                    lineTension: 0,
                    fill: true,
                    borderColor: '#2196f3',
                    backgroundColor: gradient,
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                //  tooltips: {
                //     enabled: false
                //  },
                responsive: true,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                } // Add to prevent default behaviour of full-width/height 

            }
        });
    }

    render() {
        return (
            <>
                <div className="flex bg-white rounded-lg" style={{padding:"18px"}}>
                    <div>
                        <div className="chart-container-title">
                            {this.props.values.title}
                        </div>
                        <div className="chart-container-value">
                            {this.props.values.value}
                        </div>
                    </div>
                    <div style={{ width: "60px", height: "37px", marginLeft:"17px" }}>
                        <canvas id={this.props.values.name}></canvas>
                    </div>
                </div>


            </>
        )
    }
}