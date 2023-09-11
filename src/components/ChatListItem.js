import React from 'react'
import './ChatListItem.css'

const ChatListItem = () => {
  return (
    <div className='chatListItem'>
        <img className='chatListItem--avatar' 
            src='https://pps.whatsapp.net/v/t61.24694-24/357988120_2050455628631822_5036220745889530610_n.jpg?ccb=11-4&oh=01_AdR1LNyQrRb06-aeApT75THBzSZfjuxQeHQdHKiVabhFvA&oe=650C1CA6&_nc_sid=000000&_nc_cat=107' 
            alt='julia'
        />
        <div className='chatListItem--lines'>
            <div className='chatListItem--line'>
                <div className='chatListItem--name'>Amor S2</div>
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