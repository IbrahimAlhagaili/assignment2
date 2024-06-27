"use client";
import Student from "./Student";
import React, { useState } from "react";

export const StudentsList = ({ students }) => {
  if (!students || students.length === 0) {
    console.log("std: "+ students);
    return <p>No students available</p>;
  }

  return (
    <>
      <h2 className="text-2xl mb-4">Students List:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.fullName}
            dob={student.dateOfBirth}
            grade={student.currentGrade}
          />
        ))}
      </div>
    </>
  );
};

export default StudentsList;
