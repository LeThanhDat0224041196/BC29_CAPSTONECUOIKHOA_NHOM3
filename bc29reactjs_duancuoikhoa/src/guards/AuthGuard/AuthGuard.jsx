import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export default function AuthGuard() {
  const userState = useSelector((state)=> state.userRedcer);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!userState.userInfo){
      navigate('/dang-nhap')
    }
  }, []);
  return <Outlet />
}
