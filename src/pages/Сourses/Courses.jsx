import React, { useState } from "react";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import TableCourses from "../../components/TableCourses/TableCourses";
import { classesCourses } from "../../data/classesCourses";
import Back from "../../components/common/Back/Back";
import "./courses.css";

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleDropdownChange = (selectedValue) => {
    setSelectedClass(selectedValue);
  };

  const options = classesCourses.map((classItem) => ({
    value: classItem.class,
    label: classItem.class,
  }));

  return (
    <>
      <Back title="Посилання на курси Google Classroom" />
      <section className="courses">
        <div className="container coursesFlex">
          <div className="grid2">
          <div className="courses_left">
            <img src="/images/courses/courses1.jpg" alt="" />
          </div>
          <div className="courses_right">
            <Dropdown options={options} title="Оберіть клас"onChange={handleDropdownChange} />
          </div>
          </div>
          <TableCourses selectedClass={selectedClass} data={classesCourses} />
        </div>

      </section>
    </>
  );
};

export default Courses;
