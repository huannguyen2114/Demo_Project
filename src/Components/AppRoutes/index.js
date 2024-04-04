import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teachers from "../../Pages/Teachers";
import Dashboard from "../../Pages/Dashbaord";
import StudentList from "../../Pages/Student";
import StudentManagement from "../../Pages/Management";
import Login from "../../Pages/Auth/Login";
import Register from "../../Pages/Auth/Register";
import Profile from "../../Pages/Profile";
import Unauthorized from "../../Components/Auth/Unauthorized";
import RequireAuth from "../../Components/Auth/RequireAuth";

function AppRoutes() {
  const ROLES = {
    Teacher: 2,
    Student: 1,
  };
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]} />}>
        <Route path="/student" element={<StudentList />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="management" element={<StudentManagement />}></Route>
      </Route>

      <Route
        element={<RequireAuth allowedRoles={[ROLES.Student, ROLES.Teacher]} />}
      >
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}
export default AppRoutes;
