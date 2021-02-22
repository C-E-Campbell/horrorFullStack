import React, { useEffect } from 'react';
import axios from 'axios';
export default function Signup() {
  useEffect(() => {
    axios.get('/api/register').then((res) => {});
  }, []);
  return (
    <div>
      <button>Google</button>
      <button>Facebook</button>
      <button>Twitter</button>
    </div>
  );
}
