import {
  AppstoreOutlined,
  BookOutlined,
  AndroidOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../state/AuthContext";
import { useUser } from "../../state/UserContext";
import { logOut } from "../../firebase/auth";

function SideMenu() {
  //Global state
  const { setLoggedIn } = useAuth();
  const { user, setUser } = useUser();

  const admin = user?.roles?.find((role) => role === 2);

  //properties
  const navigation = useNavigate();
  const toggleLabel = user ? "Log out" : "";

  // Methods
  async function onLogout() {
    const payload = await logOut();
    const { data, error } = payload;
    error ? onFail(data) : onSuccess(data);
  }

  const [selectedKeys, setSelectedKeys] = useState("/");
  function onSuccess(data) {
    setLoggedIn(false);
    setUser(null);

    alert("Log out successfully!");
    navigation("/login");
  }

  function onFail(data) {
    alert("logut failed");
  }
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigation(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        {user && (
          <>
            <Menu.Item key="/" icon={<AppstoreOutlined />}>
              Dashboard
            </Menu.Item>

            <Menu.Item key="/profile">Profile</Menu.Item>
            {/* Add condition to check for role 2 */}
            {admin && (
              <>
                <Menu.Item key="/management" icon={<BookOutlined />}>
                  Management
                </Menu.Item>

                <Menu.Item key="/student" icon={<AndroidOutlined />}>
                  Student
                </Menu.Item>

                <Menu.Item key="/teachers" icon={<UserOutlined />}>
                  Teacher
                </Menu.Item>
              </>
            )}

            <Menu.Item
              key="/logout"
              icon={<LogoutOutlined />}
              onClick={onLogout}
            >
              Logout
            </Menu.Item>
          </>
        )}

        {!user && (
          <>
            <Menu.Item key="/login" icon={<LoginOutlined />}>
              Login
            </Menu.Item>
            <Menu.Item key="/register">Register</Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
}

export default SideMenu;
