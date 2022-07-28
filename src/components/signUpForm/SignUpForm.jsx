import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setAuthUser }) {
  const [input, setInput] = useState({ username: '', password: '', city: '', email: ''});
  const navigate = useNavigate();
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.password !== '' && input.username !== '' && input.city !== '' && input.email !== '') {
      axios.post('/api/v1', input)
        .then((res) => setAuthUser(res.data))
      navigate('/');
    }
  };
  return (
    <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
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
        <label htmlFor="exampleInputUser" className="form-label">E-mail address</label>
        <input
          value={input.email}
          onChange={changeHandler}
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUser" className="form-label">City</label>
        <input
          value={input.sity}
          onChange={changeHandler}
          type="text"
          name="city"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter city"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
        <input
          value={input.repeat}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword"
          placeholder="Enter password"
        />
      </div>
      <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
      </div>
    </div>
  </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
}
