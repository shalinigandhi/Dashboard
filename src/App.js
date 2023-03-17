
import Sidebar from './components/Sidebar/Sidebar';
import DatePicker from './components/DatePicker/Date';
import Count from './components/Count/Count';
import Highchart from './components/Highchart/Highchart';
import data from './data';
import { useState } from 'react';
import './App.scss';

function App() {

  let [clicks, setClicks] = useState(0);
  let [impressions, setImpressions] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
 

  const getDates = (obj) => {
    let updatedData = [];

    if (obj.startDate && obj.endDate) {
          setStartDate(obj.startDate);
          setEndDate(obj.endDate);
          updatedData = data.filter((d) => {
              return new Date(d.date).getTime() >= new Date(obj.startDate).getTime() &&
                  new Date(d.date).getTime() <= new Date(obj.endDate).getTime();
          });
      

        if (updatedData.length > 0 && clicks === 0 && impressions === 0) {
          console.log("updated data", updatedData);
              updatedData.forEach((data) => {
                  clicks += Number(data.clicks);
                  impressions += Number(data.impressions);
              });
              setClicks(clicks);
              setImpressions(impressions);
          }
      }
  }


  return (
    <div className="App">
      <Sidebar />
      <main className='main-content'>
        <DatePicker data={data} getDates={getDates} />
        <Count clicks={clicks} impressions={impressions} />
        <Highchart data={data} startDate={startDate} endDate={endDate} />
      </main>
      
    </div>
  );
}

export default App;
