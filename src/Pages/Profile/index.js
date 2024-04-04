import React from "react";
import { Card, Space, Typography } from "antd";
import { useUser } from "../../state/UserContext";
const { Meta } = Card;
const Profile = () => {
  const { user } = useUser();
  const { avatar, name, roles, email } = user;
  const Role = roles.includes(2)
    ? "Teacher of OMG University"
    : "Student of OMG University";
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Your Profile</Typography.Title>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={avatar} />}
      >
        <Meta title={name} description={Role} style={{ marginBottom: 20 }} />
        <Meta title="Email" description={email} />
      </Card>
    </Space>
  );
};
export default Profile;
