import './App.css';

//hooks
import { useState, useEffect } from 'react';

//components
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

//icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatList, setChatList] = useState([
    {
      chatId: 1, 
      title: 'robson', 
      img: 'https://w7.pngwing.com/pngs/900/441/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png'
    },
    {chatId: 2, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'},
    {chatId: 3, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'},
    {chatId: 4, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'}
  ])

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    id: 1234, 
    avatar: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png', 
    name: 'wallison'
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="App">
      <div className='sidebar'>

        <NewChat show={showNewChat} setShow={setShowNewChat} user={user} chatList={chatList}/>

        <header>

          <img className='header--avatar' src={user.avatar} alt='perfil'/>

          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon/>
            </div>
            <div onClick={handleNewChat} className='header--btn'>
              <ChatIcon/>
            </div>
            <div className='header--btn'>
              <MoreVertIcon/>
            </div>
          </div>

        </header>

        <div className='search'>
          <div className='search--input'>
              <SearchIcon/>
              <input type='search' placeholder='procurar ou começar uma nova conversa'/>
          </div>
        </div>
        <div className='chatlist'>
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user}/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
      </div>
    </div>
  );
}

export default App;
