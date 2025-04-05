import { Link, useNavigate } from 'react-router-dom';
import './login.scss'
import { useState } from 'react';
import apiRequest from '../../lib/apiRequest'

const Login = () => {
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

      const res = await apiRequest.post("/auth/login", {
        username:username,
        password: password
      })
      console.log(res.data)
      // navigate()
    }

    catch (err) {
      console.error(err)
      setError(err.response.data.message)
    }

    finally {
      setIsLoading(() => false)
    }

  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>SIgn-In to your Account</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">Don't  have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.svg" alt="" />
      </div>
    </div>
  );
}

export default Login