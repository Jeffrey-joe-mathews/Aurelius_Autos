import './profilePage.scss'

const ProfilePage = () => {
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
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Update Profile</button>
                </div>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper"></div>
        </div>
    </div>
  )
}

export default ProfilePage