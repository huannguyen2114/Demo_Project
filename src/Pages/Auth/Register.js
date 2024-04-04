import { Space, Button, Form, Input, Typography } from "antd";
import { useAuth } from "../../state/AuthContext";
import { useNavigate } from "react-router";
import { createUser } from "../../firebase/auth";
import { createDocumentWithId } from "../../firebase/firestore";
import firebaseErrors from "../../data/firebaseErrors.json";

const Register = () => {
  // Global state
  const { setUid } = useAuth();

  // Local state
  const [form] = Form.useForm();

  // properties
  const navigation = useNavigate();

  async function onFinish(values) {
    const { username, email, password } = values;
    const uid = await createUID(email, password);
    if (uid) {
      const user = await createDocument(uid, username, email);
      if (user) onFinishSuccess(uid);
    }
  }

  async function createUID(email, password) {
    const result = await createUser(email, password);
    return result.data;
  }

  async function createDocument(uid, name, email) {
    const user = {
      name: name,
      email: email,
      roles: [1],
      isTeacher: false,
      avatar:
        "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-avatar-avatars-dreamstale-lineal-dreamstale.png",
    };
    await createDocumentWithId("users", uid, user);
    return user;
  }

  function onFinishSuccess(uid) {
    setUid(uid);
    navigation("/login");
  }

  function onFinishFailed(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    alert(message);
  }

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Register</Typography.Title>
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
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            style={{ backgroundColor: "#000" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Register;
