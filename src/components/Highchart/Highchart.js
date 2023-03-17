import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './highchart.scss';


const Highchart = ({ data }) => {
  
  console.log(data);

  const datesArray = data.map((d) => (
    d.date
  ))

  const impressionsArray = data.map((d) => (
    d.impressions
  ))

  console.log(impressionsArray); 

  const options = {
    title: {
      text: 'Product trends by Month'
    },
    xAxis: {
      categories: [...datesArray]
    },
    yAxis: {
      categories: [...impressionsArray]
    },
    series: [{
      data: [...impressionsArray]
    }]
  }
  
  
  return (
      <div className='highchart-container'>
          <HighchartsReact
              highcharts={Highcharts}
              options={options}
          />
      </div>
  )
}

export default Highchart;
