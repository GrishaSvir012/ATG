import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm({ setAuthUser }) {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.password !== '' && input.username !== '') {
      axios.post('/api/v1', input)
        .then((res) => setAuthUser(res.data))
      navigate('/');
    }
  };
  return (
    <form onSubmit={submitHandler}>
         <h1>Sign In</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputUser" className="form-label">Username</label>
        <input
          value={input.username}
          onChange={changeHandler}
          type="text"
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter userName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
        <input
          value={input.password}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
}
