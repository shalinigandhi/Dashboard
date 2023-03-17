import './date.scss';
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = ({data, getDates}) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (startDate && endDate) {
            getDates({
                'startDate': startDate,
                'endDate': endDate
            });
        }   
    })
  
    
    return (
        <div className="date-picker">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholder="Start Date"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholder="End Date"
            />
        </div>
    )
}

export default Date;