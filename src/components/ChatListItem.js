import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({onClick, active, data}) => {
  return (
    <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
        <img className='chatListItem--avatar' 
            src={data.img}
            alt='julia'
        />
        <div className='chatListItem--lines'>
            <div className='chatListItem--line'>
                <div className='chatListItem--name'>{data.title}</div>
                <div className='chatListItem--date'>19:00</div>
            </div>
            <div className='chatListItem--line'>
                <div className='chatListItem--lastMsg'>
                    <p>vamo usar droga dgc</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatListItem