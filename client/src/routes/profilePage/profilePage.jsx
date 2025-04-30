import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'
import apiRequest from '../../lib/apiRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const ProfilePage = () => {
    const data = useLoaderData()
    console.log(data)
    const { updateUser, currentUser } = useContext(AuthContext)
    
    const navigate = useNavigate();

    const handleSignOut = async() => {
        try {
            const res = await apiRequest.post('/auth/logout');
            console.log(res.data)
            // localStorage.removeItem("user");
            updateUser(null);
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
                    <Link to="/profile/update" >
                        <button>Update Profile</button>
                    </Link>
                </div>
                <div className="info">
                    <span>Avatar <img src={ currentUser.userInfo.avatar || "/no-user.svg"} alt="" /></span>
                    <span>Username <b>{currentUser.userInfo.username}</b></span>
                    <span>Email <b>{currentUser.userInfo.email}</b></span>
                    <button onClick={handleSignOut} >Sign Out</button>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <Link to="/create" >
                        <button>Create New Post</button>
                    </Link>
                </div>
                <List posts={data.userPosts} />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List posts={data.savedPosts} />
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