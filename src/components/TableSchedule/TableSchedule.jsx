import React from 'react'

const TableSchedule = ({ scheduleData, selectedClass }) => {
    const classSchedule = scheduleData[selectedClass];
    if (!classSchedule) {
      return null;
    }
  
    const weekdays = Object.keys(classSchedule);
  
    // Найти максимальное количество уроков среди всех дней
    let maxLessonCount = 0;
    for (const weekday of weekdays) {
      const lessonsCount = classSchedule[weekday].length;
      if (lessonsCount > maxLessonCount) {
        maxLessonCount = lessonsCount;
      }
    }
  
    const lessons = [...new Array(maxLessonCount)].map((_, index) => index + 1);
  
    return (
      <table>
        <thead>
          <tr>
            <th colSpan={weekdays.length + 1}>{selectedClass}</th>
          </tr>
          <tr>
            <th>Номер урока</th>
            {weekdays.map((weekday) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson}>
              <td>{lesson}</td>
              {weekdays.map((weekday) => (
                <td key={weekday}>
                  {lesson <= classSchedule[weekday].length ? classSchedule[weekday][lesson - 1] : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default TableSchedule
