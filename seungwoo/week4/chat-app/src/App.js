import React, { useState } from "react";
import Chat from "./components/Chat";
import FriendList from "./components/FriendList";
import "./App.css";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="App">
      {selectedFriend ? (
        <Chat
          selectedFriend={selectedFriend}
          onBack={() => setSelectedFriend(null)}
        />
      ) : (
        <FriendList onSelectChat={setSelectedFriend} />
      )}
    </div>
  );
}

export default App;
