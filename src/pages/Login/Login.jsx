import React, { useEffect } from 'react';
import axios from 'axios';
export default function Login() {
  useEffect(() => {
    axios.get('/login');
  }, []);
  return <div>Login</div>;
}
