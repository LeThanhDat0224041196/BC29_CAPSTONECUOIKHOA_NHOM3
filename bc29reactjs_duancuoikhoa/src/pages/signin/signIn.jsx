import React, { useState } from 'react'
import './signIn.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignInAPI } from '../../services/Auth/Auth';
import { USER_INFO_KEY } from '../../constants/common';
import { setUserInfoAction } from '../../store/action/userAction';
import { notification } from 'antd';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [state, setState]= useState({
      email: "",
      password: "",
  });

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value,
    })
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const result = await fetchSignInAPI(state);
      console.log(result);
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
      dispatch(setUserInfoAction(result.data.content));
      navigate('/');
      notification.success({
        message: 'Đăng nhập thành công'
      })
    } 
      catch(error){
      notification.warning({
        message: 'Email hoặc mật khẩu không đúng !',
      })
    }
  };

  return (
  <div id="login">
  <div className="container">
    <div id="login-row" className="row justify-content-center align-items-center">
      <div id="login-column" className="col-md-6">
        <div id="login-box" className="col-md-12">
          <form id="login-form" className="form" onSubmit={handleSubmit}>
            <h3 class="text-center text-black">Login</h3>
            <div className="form-group">
              <label htmlFor="Email" className="text-black">Email:</label><br />
              <input type="text" name="email" id="email" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-black">Password:</label><br />
              <input type="text" name="password" id="password" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="remember-me" className="text-black"><span>Remember me</span>&nbsp;<span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
              <button type="submit" className="btn btn-dark">Login</button>
              {/* <input type="submit" name="Login" className="btn btn-outline-dark" defaultValue="Login" /> */}
            </div>
            <div id="register-link" className="text-right">
              <a href="/dang-ky" className="text-white">Register here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

