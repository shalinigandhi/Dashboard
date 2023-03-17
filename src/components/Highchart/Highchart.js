import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './highchart.scss';


const Highchart = ({ data, startDate, endDate }) => {
  

  const updatedData = data.filter((item) => {
    if (startDate && endDate) {
      return new Date(item.date).getTime() >= new Date(startDate).getTime() &&
           new Date(item.date).getTime() <= new Date(endDate).getTime();
    }
  });
  console.log('updatedData', updatedData);


  const updatedDatesArray = updatedData.map((d) => (
    d.date
  ))

  const impressionsArray = updatedData.map((d) => (
    Number(d.impressions)
  ))
  const clicksArray = updatedData.map((d) => (
    Number(d.clicks)
  ))

  console.log('impressionsArray', impressionsArray)


  const options = {
    title: {
      text: 'Product trends by Month'
    },
    xAxis: {
      categories: [...updatedDatesArray]
    },
    series: [{
        name: 'Impressions',
        data: [...impressionsArray]
    }, {
        name: 'Clicks',
        data: [...clicksArray]
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
