import { useEffect } from "react";
import { useStudent } from "../../state/StudentContext";
import useFetch from "../../state/useFetch";
import StudentCard from "../../Components/StudentCard";
import { Skeleton, Typography, Space } from "antd";

export default function StudentList() {
  // Global State
  const { students, setStudents } = useStudent();
  const { data: users, loading, error } = useFetch("users");

  useEffect(() => {
    const studentArr = users.filter((user) => user.isTeacher === false);
    setStudents(studentArr);
  }, [users]);
  const Students = students.map((student, index) => (
    <StudentCard key={index} student={student} />
  ));

  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Student List</Typography.Title>
        {loading && <Skeleton />}
        {error && <p>{error}</p>}
        {Students}
      </Space>
    </>
  );
}
