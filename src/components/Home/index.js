import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { Divider, Grid } from "@mui/material"
const Home = () => {
    const [state, setState] = useState({
        options: {
            colors: ["#E91E63", "#FF9800"],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [30, 60, 85, 20, 49, 40, 70, 91]
            }
        ]
    })

    const [data, setData] = useState({

        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            title: {
                text: 'Basic Pie Chart'
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    })

    const [data2, setData2] = useState({

        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            title: {
                text: 'Basic Donut Chart',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    })

    const [data3, setData3] = useState({

        series: [{
            data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
            ]
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 350
            },
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        },


    })

    const [data4, setData4] = useState({

        series: [
            {
                data: [
                    {
                        x: 'New Delhi',
                        y: 218
                    },
                    {
                        x: 'Kolkata',
                        y: 149
                    },
                    {
                        x: 'Mumbai',
                        y: 184
                    },
                    {
                        x: 'Ahmedabad',
                        y: 55
                    },
                    {
                        x: 'Bangaluru',
                        y: 84
                    },
                    {
                        x: 'Pune',
                        y: 31
                    },
                    {
                        x: 'Chennai',
                        y: 70
                    },
                    {
                        x: 'Jaipur',
                        y: 30
                    },
                    {
                        x: 'Surat',
                        y: 44
                    },
                    {
                        x: 'Hyderabad',
                        y: 68
                    },
                    {
                        x: 'Lucknow',
                        y: 28
                    },
                    {
                        x: 'Indore',
                        y: 19
                    },
                    {
                        x: 'Kanpur',
                        y: 29
                    }
                ]
            }
        ],
        options: {
            legend: {
                show: false
            },
            chart: {
                height: 350,
                type: 'treemap'
            },
            title: {
                text: 'Basic Treemap'
            }
        },


    })

    const [data5, setData5] = useState({
          
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
          chart: {
            type: 'polarArea',
          },
          stroke: {
            colors: ['#fff']
          },
          fill: {
            opacity: 0.8
          },
          title: {
            text: 'Polar Area Chart'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      });
    
    const [data6, setData6] = useState({
          
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          title: {
            text: 'Radial Bar Chart'
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
      
      
      })
    return (
        <div className="app">
            <div className="row">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Bar Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="450"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="mixed-chart">
                        <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Line Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="line"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                        <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Area Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="area"
                                width="450"
                            />
                        </div>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <div className="mixed-chart">
                        <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Radar Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="radar"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                        <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Scatter Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="scatter"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                        <p style={{fontWeight:'bold', textAlign:"left", marginLeft:"6px"}}>Heatmap Chart</p>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="heatmap"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data4.options}
                                series={data4.series}
                                type="treemap"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data.options}
                                series={data.series}
                                type="pie"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data2.options}
                                series={data2.series}
                                type="donut"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data3.options}
                                series={data3.series}
                                type="candlestick"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data5.options}
                                series={data5.series}
                                type="polarArea"
                                width="450"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="mixed-chart">
                            <Chart
                                options={data6.options}
                                series={data6.series}
                                type="radialBar"
                                width="450"
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Home