// import axios from 'axios';
import React, { useState } from 'react';

export default function SignUpForm() {
  // const [input, setInput] = useState({ username: '', password: '' });
  // const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (input.password !== '' && input.username !== '') {
  //     axios.cards('/api/v1/users', input)
  //       .then((res) => setAuthUser(res.data));
  //   }
  // };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">Username</label>
        <input
          // value={input.username}
          // onChange={changeHandler}
          type="text"
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          // value={input.password}
          // onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}