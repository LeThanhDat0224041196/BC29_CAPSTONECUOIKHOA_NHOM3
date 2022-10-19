import { request } from "../../configs/axios";

const fetchWorkAPI = ()=>{
    return request({
        url: '/cong-viec',
        method: 'GET',
    })
};

const fetchWorkIdAPI = (id)=>{
    return request({
        url: `/cong-viec/${id}`,
        method: 'GET',
    })
};

const fetchAddWorkAPI = (data)=>{
    return request({
        url: `/cong-viec`,
        method: 'POST',
        data: data,
    })
};

const fetchAddImgWorkAPI = (data)=>{
    return request({
        url: `/cong-viec/upload-hinh-cong-viec/`,
        method: `POST`,
        data: data,

    })
}

const fetchEditWorkAPI = (id)=>{
    return request({
        url: `/cong-viec/${id}`,
        method: 'PUT',
    })
}

const fetchDeleteWorkAPI = (id)=>{
    return request({
        url: `/cong-viec/${id}`,
        method: 'DELETE',
    })
}

export {fetchWorkAPI, fetchWorkIdAPI, fetchAddWorkAPI, fetchAddImgWorkAPI, fetchEditWorkAPI, fetchDeleteWorkAPI  }