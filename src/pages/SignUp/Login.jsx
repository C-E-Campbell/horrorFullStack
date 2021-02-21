import React, { useEffect } from 'react';
import axios from 'axios';
export default function Login() {
  useEffect(() => {
    axios.get('/login');
  }, []);
  return (
    <div>
      <button>Google</button>
      <button>Facebook</button>
      <button>Twitter</button>
    </div>
  );
}
