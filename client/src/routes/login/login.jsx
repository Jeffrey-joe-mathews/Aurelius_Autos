import { Link, useNavigate } from 'react-router-dom';
import './login.scss'
import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
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

export default Login