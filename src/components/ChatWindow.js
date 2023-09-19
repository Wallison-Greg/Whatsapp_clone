import React from 'react'
import './ChatWindow.css'

//hooks
import { useState, useEffect, useRef } from 'react';

//emojis
import EmojiPicker from 'emoji-picker-react';

//icons 
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

//components
import MessageItem from './MessageItem';

const ChatWindow = ({user}) => {

  const body = useRef();

  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState("")
  const [listening, setListening] =  useState(false)
  const [list, setList] = useState([
    {author: 123, body: 'vai da certo crl'}, 
    {author: 123, body: 'vai da '}, 
    {author: 1234, body: 'vai da certo crl'},
    {author: 123, body: 'vai da certo crl'}, 
    {author: 123, body: 'vai da '}, 
    {author: 1234, body: 'vai da certo crl'},
    {author: 123, body: 'vai da certo crl'}, 
    {author: 123, body: 'vai da '}, 
    {author: 1234, body: 'vai da certo crl'},
    {author: 123, body: 'vai da certo crl'}, 
    {author: 123, body: 'vai da '}, 
    {author: 1234, body: 'vai da certo crl'},
    {author: 123, body: 'vai da certo crl'}, 
    {author: 123, body: 'vai da '}, 
    {author: 1234, body: 'vai da certo crl'}
  ])

  useEffect(() => {
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list])

  const handleEmojiClick = (e) => {
    setText( text + e.emoji)
  }

  const handleEmojiOpen = () => {
    setEmojiOpen(true)
  }

  const handleEmojiClose = () => {
    setEmojiOpen(false)
  }

  const handleMicClick = () => {

    if(recognition !== null){

      recognition.onstart = () => {
        setListening(true);
      }

      recognition.onend = () => {
        setListening(false);
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }

  }

  const handleSendClick = () => {

  }

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

      <div ref={body} className='chatWindow--body'>
        {list.map((item, key) => (
          <MessageItem
            key={key}
            data={item}
            user={user}
          />
        ))}
      </div>

      <div className='chatWindow--emojiArea' style={{height: emojiOpen? '300px' : '0px'}}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className='chatWindow--footer'>

        <div className='chatWindow--pre'>
          <div className='chatWindow--btn' onClick={handleEmojiClose} style={{width: emojiOpen ? 40 : 0}}>
            <CloseIcon/>
          </div>
          <div className='chatWindow--btn' onClick={handleEmojiOpen} style={{color: emojiOpen ? '#009688': '#919191'}}>
            <EmojiEmotionsIcon/>
          </div>
        </div>

        <div className='chatWindow--inputArea'>
          <input 
            className='chatWindow--input' 
            type='text' 
            placeholder='Digite uma mensagem' 
            value={text} 
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className='chatWindow--pos'>

          {text === '' && 
            <div onClick={handleMicClick} className='chatWindow--btn'>
              <MicIcon style={{color: listening ? "#126ECE" : "#919191"}}/>
            </div>
          }
          {text !== '' &&
            <div onClick={handleSendClick} className='chatWindow--btn'>
              <SendIcon/>
            </div>
          }
        </div>

      </div>

    </div>
  )
}

export default ChatWindow