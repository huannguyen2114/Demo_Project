import { deleteDocument } from "../firebase/firestore";
import { createContext, useContext, useState } from "react";

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  async function courseDelete(id) {
    await deleteDocument("courses", id);
    setCourses(courses.filter((course) => course.id !== id));
  }

  const updateCourse = (newCourse) => {
    setCourses(newCourse);
  };

  const values = { courses, setCourses, courseDelete, updateCourse };
  return (
    <CourseContext.Provider value={values}>{children}</CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
