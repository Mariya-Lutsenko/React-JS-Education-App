import React from 'react'

const DayFilter = ({ selectedDay, weekdays, onDayChange }) => {
   
   
  return (
    <div>
      <p>Filter by day:</p>
      {weekdays.map((day, index) => (
        <label key={day}>
          <input
            type="radio"
            value={day}
            checked={selectedDay === day}
            onChange={() => onDayChange(day)}
          />
          {day}
        </label>
      ))}
    </div>
  )
}

export default DayFilter
