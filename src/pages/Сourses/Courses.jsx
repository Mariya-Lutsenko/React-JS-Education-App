import React, { useState } from 'react'
import Dropdown from '../../components/common/Dropdown/Dropdown'
import TableCourses from '../../components/TableCourses/TableCourses'
import { classesCourses } from '../../data/classesCourses'

const Courses = () => {
    const [selectedClass, setSelectedClass] = useState('');

    const handleDropdownChange = (selectedValue) => {
      setSelectedClass(selectedValue);
    };

    const options = classesCourses.map((classItem) => ({
        value: classItem.class,
        label: classItem.class,
      }));
      
  return (
    <div>
      <h1>Courses</h1>
      <Dropdown options={options} onChange={handleDropdownChange} />
      <TableCourses selectedClass={selectedClass} data={classesCourses} />
    </div>
  )
}

export default Courses
