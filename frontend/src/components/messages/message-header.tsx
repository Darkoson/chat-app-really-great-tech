import React, { FC } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { BlockContactInput, User } from "../../interfaces";
import { useSelector } from "react-redux";
import {
  blockContact,
  unblockContact,
  selectBlockedIds,
} from "../../shared/store/slices/contacts-slice";
import { useRemoteContactBlocking } from "../../graphql/contacts/use-remote-contact-blocking";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/store/config";
import styled from "styled-components";

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
      } else if ("info" in result.res) {
        console.log("Failed to handle blocking:", result.res.info);
      }
    });
  };

  return (
    <Container className="header">
      <div className="message-header">
        <span className="active-chat-username">
          {currentContact.firstname + " " + currentContact.lastname}
        </span>
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
    </Container>
  );
};

export default MessageHeader;

const Container = styled.div`
  display: flex;
  padding: 0px 30px;

  align-items: center;
  flex-direction: row;
  border-radius: 0px 10px 0 0px;

  .message-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .active-chat-username {
      color: white;
    }
  }
`;
