import "./registerPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from '../../lib/apiRequest'

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()
    setIsLoading(() => true)
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");  
    console.log(username, email, password);

    try {

      const res = await apiRequest.post('/auth/register', {
        username:username,
        email: email,
        password: password
      })
      console.log(res.data)
      navigate('/login')
    }

    catch (err) {
      console.error(err)
      setError(err.response.data.message)
    }

    finally {
      setIsLoading( () => false)
    }

  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.svg" alt="" />
      </div>
    </div>
  );
}

export default Register;