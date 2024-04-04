import moment from "moment";
import { createDocument } from "../../firebase/firestore";
import { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Space,
  Typography,
  Spin,
} from "antd";
import { useCourse } from "../../state/CourseContext";
import { useModal } from "../../state/ModalContext";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Teachers = () => {
  // Global State
  const { setModal } = useModal();
  const { courses, setCourses } = useCourse();
  // Local state

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  const [form] = Form.useForm();
  async function onFinish(e) {
    const { subject, schedule, studyDays, description, createdBy } = e;
    console.log(e);
    const dateStarted = formatDate(schedule[0]["$d"]);
    const dateFinished = formatDate(schedule[1]["$d"]);
    const newCourse = {
      major: subject[0],
      subject: subject[1],
      createdBy: createdBy,
      dateStarted: dateStarted,
      dateFinished: dateFinished,
      studyDays: studyDays,
      description: description,
    };

    const { message, error, loading } = await createDocument(
      "/courses",
      newCourse,
    );
    setError(error);
    setLoading(loading);
    setCourses([...courses, newCourse]);
    alert(message);
    setModal(null);
  }
  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Teachers</Typography.Title>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          {loading && <Spin />}
          {error && <Typography.Text type="danger">{error}</Typography.Text>}
          <Form.Item
            label="Created By"
            name="createdBy" // add name for referencing
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Subject" name="subject">
            <Cascader
              options={[
                {
                  value: "Applied Science",
                  label: "Applied Science",
                  children: [
                    {
                      value: "Calculus 1",
                      label: "Calculus 1",
                    },
                    {
                      value: "Calculus 2",
                      label: "Calculus 2",
                    },
                    {
                      value: "Physics 1",
                      label: "Physics 1",
                    },
                  ],
                },
                {
                  value: "CS/CE",
                  label: "CS/CE",
                  children: [
                    {
                      value: "Fundamental Programming",
                      label: "Fundamental Programming",
                    },
                    {
                      value: "Discrete Mathematics",
                      label: "Discrete Mathematics",
                    },
                    {
                      value: "Advanced Programming",
                      label: "Advanced Programming",
                    },
                  ],
                },
                {
                  value: "Chemical Engineering",
                  label: "Chemical Engineering",
                  children: [
                    {
                      value: "General Chemistry",
                      label: "General Chemistry",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Schedule" name="schedule">
            <RangePicker />
          </Form.Item>
          <Form.Item label="No. Study Days" name="studyDays">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
};
export default () => <Teachers />;
