import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInForm({ setAuthUser }) {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.password !== '' && input.eMail !== '') {
      axios.post('/api/v1/signin', input)
        .then((res) => {
          setAuthUser(res.data);
          navigate('/');
        });
    }
    // .catch((error) => {
    //   console.log(Error);
    //   navigate('/signin');
    // });
    // navigate('/');
  };
  return (
    <div className="col-md-4 offset-md-4">
    <form onSubmit={submitHandler}>
    <div className="text-center logo mt-3">
      <h1>Sign In</h1>
    </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUser" className="form-label">E-mail address</label>
        <input
          value={input.eMail}
          onChange={changeHandler}
          type="email"
          name="eMail"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter eMail"
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
          aria-describedby="password"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
    </div>
  );
}
