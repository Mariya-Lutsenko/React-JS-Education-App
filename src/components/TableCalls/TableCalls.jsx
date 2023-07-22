import React from 'react'
import "./tableCalls.css"
import { useParams } from 'react-router-dom';
import { typesEducation } from '../../data/typesEducation';


const TableCalls = () => {
    const { id } = useParams();
    const classData = typesEducation.find((classItem) => classItem.id === Number(id));
    if (!classData) {
       
        return <div>Клас не знайдено</div>;
      }

  return (
    <table className="tableCalls">
      <thead>
        <tr>
          <th>Номер уроку</th>
          <th>Початок</th>
          <th>Закінчення</th>
        </tr>
      </thead>

      <tbody>
        {classData.lessonDuration.map((item) => (
          <tr key={item.lessonNumber}>
            <td className="tdtype">{item.lessonNumber}</td>
            <td>{item.startTime}</td>
            <td>{item.endTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableCalls
