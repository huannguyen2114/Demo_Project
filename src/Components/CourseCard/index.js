import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const CourseCard = ({ course }) => {
  const {
    subject,
    dateStarted,
    dateFinished,
    studyDays,
    description,
    createdBy,
  } = course;
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={createdBy}
        description={description}
      />
      <div>
        <p>Subject: {subject}</p>
        <p>Date Started: {dateStarted}</p>
        <p>Date Finished: {dateFinished}</p>
        <p>Study Days: {studyDays}</p>
      </div>
    </Card>
  );
};
export default CourseCard;
