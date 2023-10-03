import './App.css';

//api
import { addUser, onChatList } from './Api';

//hooks
import { useState, useEffect } from 'react';

//components
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

//icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatList, setChatList] = useState([])

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState(null);

  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {

    if(user !== null){
      let unsub = onChatList(user.id, setChatList);
      return unsub;
    }

  }, [user])

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    await addUser(newUser)

    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData}/>)
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
          <ChatWindow user={user} data={activeChat}/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
      </div>
    </div>
  );
}

export default App;
