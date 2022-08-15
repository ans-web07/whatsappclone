import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChats.css";

export default function SidebarChats({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 7000));
  }, []);

  const createChat = () => {
    const rootName = prompt("Enter name to start new chat");
    if (rootName) {
    }
  };
  return !addNewChat ? (
    <div className="sidebarChats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last msg.. </p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChats">
      <h2>Add new chat</h2>
    </div>
  );
}
