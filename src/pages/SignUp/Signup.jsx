import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Signup() {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUserName, setRegisterUserName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const register = () => {
    axios
      .post('/api/register', {
        user: registerUserName,
        pass: registerPassword,
      })
      .then((res) => console.log(res.data));
  };

  const login = () => {
    axios
      .post('/api/login', {
        user: loginUserName,
        pass: loginPassword,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        onChange={(e) => setRegisterUserName(e.target.value)}
        placeholder=" register username"
        value={registerUserName}
        type="text"
      />
      <input
        onChange={(e) => setRegisterPassword(e.target.value)}
        placeholder="register password"
        value={registerPassword}
        type="password"
      />
      <h1>Login</h1>
      <input
        onChange={(e) => setLoginUserName(e.target.value)}
        placeholder="login username"
        value={loginUserName}
        type="text"
      />
      <input
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder=" login password"
        value={loginPassword}
        type="password"
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}
