import React, { useState }  from 'react'
import './NewChat.css'

//icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewChat = ({user, chatList, show, setShow}) => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png', name: 'julia'},
        {id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png', name: 'julia'},
        {id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png', name: 'julia'},
        {id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png', name: 'julia'}
    ])

    const handleBackButton = () => {
        setShow(false);
    }

  return (
    <div className='newChat' style={{left: show ? 0 : -415}}>
        <div className='newChat--head'>
            <div onClick={handleBackButton} className='newChat--backButton'>
                <ArrowBackIcon/>
            </div>
            <div className='newChat--headTitle'>Nova Conversa</div>
        </div>
        <div className='newChat--list'>
            {list.map((item, key) => (
                <div className='newChat--item' key={key}>
                    <img className='newChat--avatar' src={item.avatar} alt={item.name}/>
                    <div className='newChat--name'>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewChat