import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {USER_INFO_KEY} from '../../../constants/common';
import {setUserInfoAction} from '../../../store/action/userAction';

export default function UserHeader(){
const dispatch = useDispatch();
const userState = useSelector((state)=> state.userReducer);
const navigate = useNavigate();

const handleLogout = ()=>{
  localStorage.removeItem(USER_INFO_KEY);
  dispatch(setUserInfoAction(null));
  navigate('/');
};

return (
  <div className='navbar'>
    {!userState.userInfo? (
      <>
      <button onClick={()=> navigate('/dang-nhap')}  type="button" class="btn header__btn__sign shadow-none">Sign in</button>
      <button onClick={()=> navigate('/dang-ky')}  type="button" class="btn header__btn__join btn-outline-success shadow-none">Join</button>
      </>
    ):(
      <>
        <span> Hello {userState.userInfo.user.name}</span>
        <button onClick={handleLogout}  type="button" class="btn header__btn__join btn-outline-info shadow-none">LogOut</button>
      </>
    )
    }
  </div>
)
}
