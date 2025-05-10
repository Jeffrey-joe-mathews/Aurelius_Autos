import { useContext, useState } from 'react'
import './chat.scss'
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import {format} from 'timeago.js'
import { SocketContext } from '../../context/SocketContext';

const Chat = ({chats}) => {
    const [chat, setChat] = useState(null);
    const {currentUser} = useContext(AuthContext)
    const {socket} = useContext(SocketContext)
    const handleChat = async (id, reciever) => {
        try {
            const res = await apiRequest("/chats/"+id);
            setChat({...res.data.data, reciever})
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const text = formData.get("text")
        if(!text) {
            return;
        }
        try {
            const res = await apiRequest.post("/messages/"+chat.id, {text:text})
            console.log(res)
            setChat(prev =>({...prev, messages:[...prev.messages, res.data.data]}))
            event.target.reset();
        }
        catch (err) {
            console.error(err)
        }
    }

    const testSocket = () => {
        console.log(socket)
        socket.emit("test", "Hello from the other side!!!")
    }

  return (
    <div className='chat'>
        <button onClick={testSocket} >testing</button>
        <div className="messages">
            <h1>Messages</h1>
            {
                chats.map(chat=>(
                    <div className='message' key={chat.id} 
                        style={
                            {
                                backgroundColor: chat.seenBy.includes(currentUser.userInfo.id) ? "white" : "#fece51"
                            }
                        }
                        onClick={()=>handleChat(chat.id, chat.reciever)}
                    >
                        <img src={chat.reciever.avatar||null} alt="" />
                        <span>{chat.reciever.username}</span>
                        <p>
                            {chat.lastMessage}
                        </p>
                    </div>
                ))
            } 
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
        </div>

    {chat && 
        <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src={chat.reciever.avatar} alt="" />
                    {chat.reciever.username}
                </div>
                <span className='close' onClick={() => setChat(() => !chat)} >x</span>
            </div>
            <div className="center">
                {
                    chat.messages.map(message=>(
                        <div className="chatMessage"
                            style={{
                                alignSelf: message.userId==currentUser.userInfo.id ? "flex-end":'flex-start',
                                textAlign: message.userId==currentUser.userInfo.id ? "right":'left',
                            }}
                            key={message.id}>
                            <p>{message.text}</p>
                            <span>{format(message.createdAt)}</span>
                        </div>
                    )

                    )
                } 
            </div>
            <form onSubmit={handleSubmit} className="bottom">
                <textarea name='text' ></textarea>
                <button>Send</button>
            </form>
        </div>
        }
    </div>
  )
}

export default Chat