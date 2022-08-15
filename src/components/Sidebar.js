import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChats from "./SidebarChats";
import db from "./firebase1";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    //   db.collection("rooms").onSnapshot((snapshot) =>
    //     setRooms(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data()
    //       }))
    //     )
    //   );
    // }, []);
    const unsubscribe = db.collection("rooms").onSnapshot((Snapshot) =>
      setRooms(
        Snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Avatar />
        </IconButton>

        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChats addNewChat />
        {rooms.map((room) => (
          <SidebarChats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
