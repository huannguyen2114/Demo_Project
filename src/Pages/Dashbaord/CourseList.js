import { Skeleton } from "antd";
import { useEffect } from "react";
import CourseCard from "../../Components/CourseCard";
import useFetch from "../../state/useFetch";
import { useCourse } from "../../state/CourseContext";
import "./CourseList.css"; // Import CSS file for styling

export default function CourseList() {
  // Global State
  const { courses, setCourses } = useCourse();

  // properties
  const { data, loading, error } = useFetch("courses");

  //methods
  useEffect(() => {
    setCourses(data);
  }, [data]);

  const Courses = courses.map((course, index) => (
    <CourseCard key={index} course={course} />
  ));

  return (
    <div className="course-list-container">
      {" "}
      {/* Apply class for styling */}
      {loading && <Skeleton />}
      {error && <p>{error}</p>}
      <div className="course-grid">{Courses}</div>{" "}
      {/* Apply class for styling */}
    </div>
  );
}
