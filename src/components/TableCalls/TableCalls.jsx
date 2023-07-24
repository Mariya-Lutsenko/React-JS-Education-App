import React from 'react'
import "./tableCalls.css"
import { useParams } from 'react-router-dom';
import { typesEducation } from '../../data/typesEducation';


const TableCalls = () => {
    const { id } = useParams();
    const classData = typesEducation.find((classItem) => classItem.id === Number(id));
    if (!classData) {
       
        return <div></div>;
      }

  return (
    <table className="tableCalls">
      <thead>
        <tr>
          <th className='tableCalls_head'>Номер уроку</th>
          <th className='tableCalls_head'>Початок</th>
          <th className='tableCalls_head'>Закінчення</th>
        </tr>
      </thead>

      <tbody>
        {classData.lessonDuration.map((item) => (
          <tr className='tableCalls_tr' key={item.lessonNumber}>
            <td className='tableCalls_td'>{item.lessonNumber}</td>
            <td className='tableCalls_td'>{item.startTime}</td>
            <td className='tableCalls_td'>{item.endTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableCalls
