import {request} from '../../configs/axios'

const signUpAPI = (data) =>{
    return request({
        data: data,
        url: '/auth/signup',
        method: 'POST',
    })
};

const signInAPI = (data)=>{
    return request({
        data: data,
        url: '/auth/signin',
        method: 'POST',
    })
}

export {signInAPI, signUpAPI}
