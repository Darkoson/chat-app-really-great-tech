import React, { FC } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Link } from "react-router-dom";

const MessageHeader: FC = () => {
  return (
   
    <div className="header message-header">
      <h3 className="active-chat-username">Pamela Arhin</h3>
      <div className="drop-down active-chat-options">
        <Popover
          placement="bottomRight"
          content={<Link to={"/signin"}>Block user</Link>}
          trigger="click">
          <MoreOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default MessageHeader;
