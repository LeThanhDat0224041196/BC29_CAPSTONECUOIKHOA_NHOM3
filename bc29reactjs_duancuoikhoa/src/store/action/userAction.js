import { SET_USER_INFO } from "../types/userType"

const setUserInfoAction = (data)=>{
    return {
        type: SET_USER_INFO,
        payload: data,
    };
};

export {setUserInfoAction}