import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatApp from './ChatApp';
import FriendList from './FriendList';

function MainApp() {
  const [screen, setScreen] = useState('chatList');

  return (
    <>
      {screen === 'chatList' && (
        <ChatList
          onChatClick={() => setScreen('chat')}
          onFriendClick={() => setScreen('friendList')}
        />
      )}

      {screen === 'chat' && <ChatApp onBack={() => setScreen('chatList')} />}

      {screen === 'friendList' && <FriendList onBack={() => setScreen('chatList')} />}
    </>
  );
}

export default MainApp;
