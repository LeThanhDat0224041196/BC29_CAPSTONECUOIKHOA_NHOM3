import { request } from "../../configs/axios";

const getCommentAPI = ()=>{
    return request ({
        url: '/binh-luan',
        method: 'GET',
    })
};

const postCommentAPI = (data)=>{
    return request ({
        data: data,
        url: '/binh-luan',
        method: 'POST',
    })
};

const putCommentAPI = (id)=>{
    return request ({
        url: `/binh-luan/${id}`,
        method: 'PUT'
    })
};

const deletedCommentAPI = (id)=>{
    return request({
        url: `binh-luan/${id}`,
        method: 'DELETE',
    })
};

const getCommentByWorksAPI = ()=>{
    return request({
        url: `binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`,
        method: 'GET',
    })
};

export {getCommentAPI, postCommentAPI, putCommentAPI, deletedCommentAPI, getCommentByWorksAPI}