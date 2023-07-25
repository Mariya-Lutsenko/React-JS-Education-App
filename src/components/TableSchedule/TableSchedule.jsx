import React, {useState} from 'react'
import "./tableSchedule.css"

const TableSchedule = ({ scheduleData, selectedClass, selectedDay  }) => {
  const [showAll, setShowAll] = useState(false);
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
      <div>
      <button onClick={() => setShowAll(!showAll)}>Показать все</button>
      <table>
        <thead>
          <tr>
            <th colSpan={showAll ? weekdays.length + 1 : 2}>{selectedClass}</th>
          </tr>
          <tr>
            <th>Номер урока</th>
            {weekdays.map((weekday, index) => (
              (showAll || weekday === selectedDay) && <th key={index}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson}>
              <td>{lesson}</td>
              {weekdays.map((weekday, index) => (
                (showAll || weekday === selectedDay) && (
                  <td key={index}>
                    {lesson <= classSchedule[weekday].length ? classSchedule[weekday][lesson - 1] : null}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };

export default TableSchedule
