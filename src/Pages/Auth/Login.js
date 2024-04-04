import { Button, Checkbox, Form, Input, Typography, Space } from "antd";
import { useAuth } from "../../state/AuthContext";
import { useUser } from "../../state/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../firebase/auth";
import { readDocument } from "../../firebase/firestore";

const Login = () => {
  //Global state
  const { setUid, setLoggedIn } = useAuth();
  const { setUser } = useUser();

  // Local state
  const [form] = Form.useForm();

  //properties
  const navigation = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Method
  async function onFinish(values) {
    const { email, password } = values;
    const payload = await loginUser(email, password);

    const { data, errMessage } = payload;
    console.log(data);
    if (data) {
      setUid(data);
      const userPayload = await readDocument("users", data);
      setUser(userPayload.data);
      setLoggedIn(true);
      navigation("/");
    } else {
      onFinishFailed(errMessage);
    }
  }

  function onFinishFailed(errMessage) {
    alert(errMessage); //need transform to friend word
  }

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Login</Typography.Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Login;
