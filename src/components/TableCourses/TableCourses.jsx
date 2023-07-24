import React from 'react'

const TableCourses = ({data, selectedClass}) => {
    const filteredData = data.find((item) => item.class === selectedClass);

  if (!filteredData) {
    return <div>Ви не обрали клас для выдображення даних</div>;
  }

  return (
    <table>
    <thead>
      <tr>
        <th>Назва предмету</th>
        <th>Код предмету</th>
        <th>Вчитель</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.subjects.map((subject) => (
        <tr key={subject.code}>
          <td>{subject.name}</td>
          <td>{subject.code}</td>
          <td>{subject.teacher}</td>
          <td>{subject.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default TableCourses
