import { useState } from "react";
import "./chatList.scss";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" name="search" placeholder="Search" />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" onClick={()=>setAddMode((prev) => !prev)} />
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello Jane!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello Jane!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello Jane!</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello Jane!</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList