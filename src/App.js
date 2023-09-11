import './App.css';

//hooks
import { useState, useEffect } from 'react';

//components
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

//icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'},
    {chatId: 2, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'},
    {chatId: 3, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'},
    {chatId: 4, title: 'julia', img: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'}
    
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="App">
      <div className='sidebar'>
        <header>

          <img className='header--avatar' src='https://pps.whatsapp.net/v/t61.24694-24/361328749_2611165299191006_5229913777978113971_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQeLZ7dgTo06AVpNXXv0cfNVwxa_mznnusAMfbainY5ZA&oe=6504358C&_nc_cat=104' alt='perfil'/>

          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon/>
            </div>
            <div className='header--btn'>
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
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
      </div>
    </div>
  );
}

export default App;
