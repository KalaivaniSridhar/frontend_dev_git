import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey } from 'react-icons/fa'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    axios.get('http://localhost:3000/userdata', {
      email: email,
      password: password
    }).then(result => {
    })
      .catch(error => {
      })
  }

  return (
    <div className="background">
      <div className="container">

        <label className="label">Email :</label><div style={{}}><FaEnvelope color="#C8C8C8" /><input value={email} onChange={handleEmail}
          type="text" className="input" placeholder="kalai@gmail.com" /> <br />
        </div>

        <label className="label">Password :</label><div style={{}}><FaKey color="#C8C8C8" /> <input value={password} onChange={handlePassword}
          type="text" className="input" placeholder="Mkalai*9" /> <br />
          {!email == '' && !password == '' ? <Link to="/User"><button onClick={handleApi} className="btn">Login</button></Link>
            : <button className="btn">Login</button>}
        </div>
      </div></div>

  );
}

export default Login;




