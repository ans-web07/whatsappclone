import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  MoreVert,
  AttachFile,
  InsertEmoticon,
  Mic
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [input, setInput] = useState("");

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 8000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed  ", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Person Name</h3>
          <p>Last seen at 3.00pm</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className={`chat_msg ${true && "chat_receiver"}`}>
          <span className="chat_name">Anshika hwis</span>
          Hello
          <span className="chat_timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
