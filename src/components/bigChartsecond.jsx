// import React from "react"
import React, { Component } from 'react'
import data from '../data/data.json'
import Chart from 'chart.js'

export default class componentName extends Component {
    createSecond = (mapX, mapY) => {
        let ctx = document.getElementById('large').getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, '#8dcefc');
        gradient.addColorStop(0.4, 'rgba(2, 148, 255, 0.626274)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0001)');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...mapX],
                datasets: [{
                    label: 'Series 1',
                    data: [...mapY],
                    lineTension: 0,
                    fill: true,
                    borderColor: 'transparent',
                    backgroundColor: gradient,
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        position: 'top',
                        ticks: {
                            beginAtZero: true,
                            fontSize: 14,
                            fontColor:"black",
                            // fontStyle
                            padding: 20


                        },
                        gridLines: {	
                            offsetGridLines: true,
                            color:"#8dcefc",
                            // display
                            // gridLines: {
                                drawBorder: false,
                            // }
                        },
                        

                    }],
                    yAxes: [{
                        display: false
                    }],
                }

            }
        });
    }


    componentDidMount() {

        let mapY = data.map(e => {
            return parseInt(e.volume)
        })

        let mapX = data.map(e => {
            return new Date(e.date.split('-').join(", "))
        })
        this.createSecond(mapX, mapY)
    }
    render() {


        // console.log(mapData)

        return (
            <>
                <canvas id="large"> </canvas>
            </>
        )
    }
}
