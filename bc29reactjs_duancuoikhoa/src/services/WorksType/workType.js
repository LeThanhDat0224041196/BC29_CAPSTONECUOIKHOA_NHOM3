import { request } from "../../configs/axios";

const fetchWorkTypeAPI = ()=>{
    return request({
        url: '/loai-cong-viec',
        method: 'GET',
    })
}

const fetchWorkTypeIdAPI = (id)=>{
    return request({
        url:`/loai-cong-viec/${id}`,
        method: 'GET',
    })
};

const fetchAddWorkTypeAPI = (data)=>{
    return request({
        url: `/loai-cong-viec`,
        method: 'POST',
        data: data,
    })
}

const fetchEditWorkTypeAPI = (id)=>{
    return request({
        url: `/loai-cong-viec/${id}`,
        method: 'PUT',
    })
}

const fetchDeleteWorkTypeAPI = (id)=>{
    return request({
        url: `/loai-cong-viec/${id}`,
        method: 'DELETE'
    })
}

export {fetchWorkTypeAPI, fetchWorkTypeIdAPI,fetchAddWorkTypeAPI, fetchEditWorkTypeAPI, fetchDeleteWorkTypeAPI }