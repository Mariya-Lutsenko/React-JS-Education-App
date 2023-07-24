import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from '../../components/common/Dropdown/Dropdown';
import TableSchedule from '../../components/TableSchedule/TableSchedule';

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

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
         <TableSchedule scheduleData={scheduleData} selectedClass={selectedClass} />
      )}
    </div>
  )
}

export default Schedule
