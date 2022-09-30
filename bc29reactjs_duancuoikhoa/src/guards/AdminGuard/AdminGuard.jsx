import { notification } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { userRole } from '../../enums/common';

export default function AdminGuard() {
  const userState = useSelector((state)=> state.userReducer);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!userState.userInfo){
      return navigate('/dang-nhap')
    }
    if(userState.userInfo && userState.userInfo.role !== userRole.Admin ){
      notification.warning({
        message: "Khách hàng không thể vào trang admin!",
      });
      return navigate('?')
    }
  }, []);
  return <Outlet />
};
