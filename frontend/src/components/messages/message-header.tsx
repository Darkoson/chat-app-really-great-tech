import React, { FC } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import { BlockContactInput, User } from "../../interfaces";
import { useSelector } from "react-redux";
import {
  blockContact,
  unblockContact,
  selectBlockedIds,
} from "../../shared/store/slices/contacts-slice";
import {
  useRemoteContactBlocking,
} from "../../graphql/contacts/use-remote-contact-blocking";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/store/config";

export interface MessageHeaderProps {
  currentUserId: number;
  currentContact: User;
}
const MessageHeader: FC<MessageHeaderProps> = ({
  currentContact,
  currentUserId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const blockedContactIds = useSelector(selectBlockedIds);
  const { executeContactBlocking } = useRemoteContactBlocking();

  const handleBlocking = (
    block: boolean,
    userId: number,
    contactId: number
  ) => {
    let input: BlockContactInput = {
      block,
      blockerId: userId,
      victimId: contactId,
    };
    executeContactBlocking(input).then((result) => {
      if (result.ok) {
        block
          ? dispatch(blockContact(contactId))
          : dispatch(unblockContact(contactId));
      } else if ("messages" in result.res) {
        console.log("Failed to handle blocking:", result.res.messages[0]);
      }
    });
  };

  return (
    <div className="header message-header">
      <h3 className="active-chat-username">
        {currentContact.firstname + " " + currentContact.lastname}
      </h3>
      <div className="drop-down active-chat-options">
        <Popover
          placement="bottomRight"
          content={
            blockedContactIds.includes(currentContact.id) ? (
              <span
                onClick={() =>
                  handleBlocking(false, currentUserId, currentContact.id)
                }>
                Unblock {currentContact.firstname}
              </span>
            ) : (
              <span
                onClick={() =>
                  handleBlocking(true, currentUserId, currentContact.id)
                }>
                Block {currentContact.firstname}
              </span>
            )
          }
          trigger="click">
          <MoreOutlined />
        </Popover>
      </div>
    </div>
  );
};

export default MessageHeader;
