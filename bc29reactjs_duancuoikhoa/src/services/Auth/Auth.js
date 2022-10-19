import {request} from '../../configs/axios'

const fetchSignUpAPI = (data) =>{
    return request({
        data: data,
        url: '/auth/signup',
        method: 'POST',
    })
};

const fetchSignInAPI = (data)=>{
    return request({
        data: data,
        url: '/auth/signin',
        method: 'POST',
    })
}

export {fetchSignInAPI, fetchSignUpAPI}
