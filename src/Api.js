import {db} from './firebaseConfig'
import { collection, getDocs, getDoc, doc, setDoc, updateDoc, addDoc, arrayUnion, onSnapshot} from "firebase/firestore";

const docCollection = collection(db, 'users');

const addUser = async (u) => {

    const user = await setDoc(doc(docCollection, u.id),{
        name: u.name,
        avatar: u.avatar
    }, { merge: true })

    return user

}

const getContactList = async (userId) => {
    let list = []

    let results = await getDocs(docCollection);

    results.forEach(result => {
        let data = result.data();

        if(result.id !== userId){
            list.push({
                id: result.id,
                name: data.name,
                avatar: data.avatar
            })
        }
    });

    return list;
}

const addNewChat = async (user, user2) => {

    let newChat = await addDoc(collection(db, 'chats'), {
        message: [],
        users: [user.id, user2.id]
    })

    await updateDoc(doc(docCollection, user.id), {
        chats: arrayUnion({
            chatId: newChat.id,
            title: user2.name,
            image: user2.avatar,
            with: user2.id
        })
    })

    await updateDoc(doc(docCollection, user2.id), {
        chats: arrayUnion({
            chatId: newChat.id,
            title: user.name,
            image: user.avatar,
            with: user.id
        })
    })
}

const onChatList = (userId, setChatList) => {

    return onSnapshot(doc(docCollection, userId), (doc) => {
        if(doc.exists){
            let data = doc.data();

            if(data.chats){
                setChatList(data.chats);
            }
        }
    })

}

const onChatContant = (chatId, setList, setUsers) => {

    return onSnapshot(doc(db, 'chats', chatId), (doc) => {
        if(doc.exists){
            let data = doc.data();

            setList(data.message);
            setUsers(data.users);
        }
    })

}

const sendMessage = async (chatData, userId, type, body, users) => {

    let now = new Date();

    await updateDoc(doc(db, 'chats', chatData.chatId), {
        message: arrayUnion({
           type,
           author: userId,
           body,
           date: now
        })
    })

    for(let i in users){

        let u = await getDoc(doc(docCollection, users[i]));
        let uData = u.data();

        if(uData.chats){
            let chats = [...uData.chats];

            for(let e in chats){
                if(chats[e].chatId === chatData.chatId){
                    chats[e].lastMessage = body;
                    chats[e].lastMessageDate = now;
                }
            }

            await updateDoc(doc(docCollection, users[i]), {
                chats
            })
        }

    }


}

export {addUser, getContactList, addNewChat, onChatList, onChatContant, sendMessage}