import React from "react";
import { useParams } from "react-router-dom";
import DrawTable from "../../Components/DrawTable/DrawTable.js";
import LecturerInfo from "../../Components/LecturerInfo/LecturerInfo.js";
import LecturersTimetable from "../../Components/LecturersTimetable/LecturersTimetable.js";
import { lecturers } from "../../state/state.js";
import "./style.css"
import { useSelector } from "react-redux";

function Lecturer() {
  const lecturers = useSelector((state) => {
    return state.lecturers;
  });
  const { lecturerName } = useParams();
  const filtered = lecturers.filter(
    (lecturer, i) => `${lecturer.name}${lecturer.surname}` == lecturerName
  );

  const { name, surname, speciality } = filtered[0];
  return (
    <div className="lecturerWrapper">
      <LecturerInfo />
      <DrawTable param={filtered[0].timeTable} />
    </div>
  );
}

export default Lecturer;
