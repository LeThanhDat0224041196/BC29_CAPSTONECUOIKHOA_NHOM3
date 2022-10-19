import { request } from "../../configs/axios";

const fetchUserAPI = ()=>{
    return request({
        url: '/users',
        method: 'GET',
    })
}

const fetchUserIdAPI = (id)=>{
    return request({
        url:`/users/${id}`,
        method: 'GET',
    })
};

const fetchSearchUserAPI = (name)=>{
    return request({
        url: `/users/search/${name}`,
        method: 'GET'
    })
}

// const fetchSearchAPI = ()=>{
//     return request({
//         url: `/api/users/phan-trang-tim-kiem?pageIndex=${}&pageSize=${}&keyword=${}`
//     })
// }

const fetchAddUserAPI = (data)=>{
    return request({
        url: `/users`,
        method: 'POST',
        data: data,
    })
}

const fetchAddAvatarUserAPI = (data)=>{
    return request({
        url: '/users/upload-avatar',
        method: 'POST',
        data: data,
    })
}

const fetchEditUserAPI = (id)=>{
    return request({
        url: `/users/${id}`,
        method: 'PUT',
    })
}

const fetchDeleteUserAPI = (id)=>{
    return request({
        url: `/users?id=${id}`,
        method: 'DELETE'
    })
}


export {fetchUserAPI, fetchUserIdAPI, fetchSearchUserAPI, fetchAddUserAPI, fetchAddAvatarUserAPI, fetchEditUserAPI, fetchDeleteUserAPI}





