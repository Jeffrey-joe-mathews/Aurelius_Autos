import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  
    const {currentUser, updateUser} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [avatar, setAvatar] = useState([])
    const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(`/users/${currentUser.userInfo.id}`, {
        username : username, 
        email : email,
        password : password,
        avatar : avatar[0]
      })
      updateUser(res.data);
      console.log(res.data);
      navigate('/profile')
    } 
    catch (error) {
      console.error(error)
      setError(error.response.data.message)
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.userInfo.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.userInfo.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={ avatar[0] || currentUser.userInfo.avatar || "/no-user.svg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "dtcluwm94",
            uploadPreset: "aurelius",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatarsAurelius",
          }} 
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;