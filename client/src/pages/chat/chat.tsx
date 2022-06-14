import React from "react";
import { MoreOutlined, SendOutlined } from "@ant-design/icons";
import { Input, Popover } from "antd";
import "./chat.css";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="Chat">
      <div className="wrapper">
        <div className="contacts-area">
          <div className="header contacts-header">
            <div className="user-profile">
              <div className="picture"></div>
              <div className="user">
                <span> Thomas Darko</span>
                <span className="text-small">darkothomas80@gmail.com</span>
              </div>
            </div>
            <div className="user-actions">
              <Popover
                placement="bottomRight"
                content={<Link to={"/signin"}>Logout</Link>}
                trigger="click">
                <MoreOutlined />
              </Popover>
            </div>
          </div>

          <div className="contacts-body">
            <div className="form-group">
              <Input
                allowClear
                type="text"
                name="search"
                className="text-small"
                placeholder="Search a contact"
                id="search-input"
              />
            </div>

            <div className="contacts-list">
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">
                  <MoreOutlined />
                </div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
              <div className="contact-wrapper">
                <div className="contact">
                  <div className="contact-picture"></div>
                  <div className="contact-details">
                    <span className="contact-name"> Thomas Darko</span>
                    <span className="contact-excerpt">
                      Lorem, ipsum dolor...
                    </span>
                  </div>
                </div>
                <div className="contact-notification">btn</div>
              </div>
            </div>
          </div>
        </div>

        <div className="messages-area">
          <div className="header messages-header">
            <div className="message-recipient-name"> Pamela Arhin</div>
            <div className="message-recipient-options">
              <Popover
                placement="bottomRight"
                content={"content"}
                trigger="click">
                <MoreOutlined />
              </Popover>
            </div>
          </div>
          <div className="messages-body">
            <div className="messages"> text messates</div>
            <div className="messages-input">
              <Input
                id="newInput"
                addonBefore="http://"
                suffix={<SendOutlined />}
                defaultValue="mysite"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
