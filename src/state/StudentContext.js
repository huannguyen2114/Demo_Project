import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
