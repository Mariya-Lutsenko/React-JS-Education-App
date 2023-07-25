import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from '../../components/common/Dropdown/Dropdown';
import TableSchedule from '../../components/TableSchedule/TableSchedule';
import DayFilter from '../../components/DayFilter/DayFilter';

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await axios.get('/data/scheduleData.json'); 
        setScheduleData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchScheduleData();
  }, []);

  const handleClassChange = (selectedValue) => {
    setSelectedClass(selectedValue);
    setSelectedDay(Object.keys(scheduleData[selectedValue])[0]);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shadule</h1>
      <Dropdown
        options={Object.keys(scheduleData).map((className) => ({
          value: className,
          label: className,
        }))}
        onChange={handleClassChange}
        title="Оберіть клас"
      />
      {selectedClass && scheduleData[selectedClass] && (
        <>
         <DayFilter selectedDay={selectedDay}  weekdays={Object.keys(scheduleData[selectedClass])}  onDayChange={handleDayChange} />
         <TableSchedule scheduleData={scheduleData} selectedClass={selectedClass}   selectedDay={selectedDay} />
         </>
      )}
    </div>
  )
}

export default Schedule
