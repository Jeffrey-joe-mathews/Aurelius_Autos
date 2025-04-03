import { useState } from 'react'
import './chat.scss'

const Chat = () => {

    const [chat, setChat] = useState(true);

  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className='message' >
                <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                <span>Jeffrey Joe</span>
                <p>
                    Lorem ipsum dolor sit.
                </p>
            </div>
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
                    <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" />
                    Jeffrey Joe
                </div>
                <span className='close' onClick={() => setChat(() => !chat)} >x</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
        }
    </div>
  )
}

export default Chat