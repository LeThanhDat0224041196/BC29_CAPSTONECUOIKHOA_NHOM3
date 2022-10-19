import { request } from "../../configs/axios";

const fetchCommentAPI = ()=>{
    return request ({
        url: '/binh-luan',
        method: 'GET',
    })
};

const fetchPostCommentAPI = (data)=>{
    return request ({
        data: data,
        url: '/binh-luan',
        method: 'POST',
    })
};

const fetchPutCommentAPI = (id)=>{
    return request ({
        url: `/binh-luan/${id}`,
        method: 'PUT'
    })
};

const fetchDeletedCommentAPI = (id)=>{
    return request({
        url: `binh-luan/${id}`,
        method: 'DELETE',
    })
};


export {fetchCommentAPI, fetchPostCommentAPI, fetchPutCommentAPI, fetchDeletedCommentAPI}