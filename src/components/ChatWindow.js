import React from 'react'
import './ChatWindow.css'

//icons 
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

const ChatWindow = () => {
  return (
    <div className='chatWindow'>

      <div className='chatWindow--header'>

        <div className='chatWindow--headerInfo'>
          <img className='chatWindow--avatar' src='https://cdn-icons-png.flaticon.com/512/4792/4792929.png' alt='teste'/>
          <div className='chatWindow--name'>Robson</div>
        </div>

        <div className='chatWindow--headerButtons'>
          <div className='chatWindow--btn'>
            <SearchIcon/>
          </div>
          <div className='chatWindow--btn'>
            <AttachFileIcon/>
          </div>
          <div className='chatWindow--btn'>
            <MoreVertIcon/>
          </div>
        </div>

      </div>

      <div className='chatWindow--body'></div>

      <div className='chatWindow--footer'>

        <div className='chatWindow--pre'>
          <div className='chatWindow--btn'>
            <EmojiEmotionsIcon/>
          </div>
        </div>

        <div className='chatWindow--inputArea'>
          <input className='chatWindow--input' type='text' placeholder='Digite uma mensagem'/>
        </div>

        <div className='chatWindow--pos'>
          <div className='chatWindow--btn'>
            <SendIcon/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ChatWindow