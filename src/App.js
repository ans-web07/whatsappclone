import "./styles.css";
import Sidebar from "./components/Sidebar.js";
import Chats from "./components/Chat.js";

export default function App() {
  return (
    <div className="app">
      <div className="app_body ">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}
