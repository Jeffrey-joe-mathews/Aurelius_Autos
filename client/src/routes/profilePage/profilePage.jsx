import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'
import apiRequest from '../../lib/apiRequest'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    
    const navigate = useNavigate();

    const handleSignOut = async() => {
        try {
            const res = await apiRequest.post('/auth/logout');
            console.log(res.data)
            localStorage.removeItem("user");
            navigate('/');
        }
        catch (err) {
            console.error(err)
        }
    }

  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar <img src="https://avatars.githubusercontent.com/u/171322141?v=4" alt="" /></span>
                    <span>Username <b>Jeffrey Joe</b></span>
                    <span>Email <b>jjm@gmail.com</b></span>
                    <button onClick={handleSignOut} >Sign Out</button>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default ProfilePage