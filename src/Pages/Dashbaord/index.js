import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CourseList from "./CourseList";
import { useUser } from "../../state/UserContext";
import { Space, Typography } from "antd";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const { user } = useUser();
  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Course List</Typography.Title>
        <CourseList />
      </Space>
    </>
  );
};
export default Dashboard;
