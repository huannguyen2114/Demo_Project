import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const StudentCard = ({ student }) => {
  const { id, name, avatar } = student;
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={avatar} />}
    >
      <Meta title={name} description={id} />
    </Card>
  );
};
export default StudentCard;
