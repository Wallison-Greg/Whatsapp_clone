import React, { useState, useEffect }  from 'react'
import './NewChat.css'

//icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//api
import { getContactList, addNewChat } from '../Api';

const NewChat = ({user, chatList, show, setShow}) => {

    const [list, setList] = useState([])

    useEffect(()=> {
        const getList = async () => {
            if(user !== null){
                let results = await getContactList(user.id);

                setList(results)
            }
        }

        getList();
    }, [user])

    const addChat = async (user2) => {
        await addNewChat(user, user2)

        handleBackButton();
    }

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
                <div onClick={() => addChat(item)} className='newChat--item' key={key}>
                    <img className='newChat--avatar' src={item.avatar} alt={item.name}/>
                    <div className='newChat--name'>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewChat