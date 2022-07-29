import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function logout({ setAuthUser }) {
  const navigate = useNavigate();
  console.log('before');
  useEffect(() => {
    fetch('/api/v1/logout').then(setAuthUser('')).then(navigate('/'));
  }, []);

  console.log('after');
  return (
    <div>logout</div>
  );
}
