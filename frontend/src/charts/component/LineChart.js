import React from 'react';
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChart = (props) => {

    return <Line data={props.chartData}/>
}
  
export default LineChart;