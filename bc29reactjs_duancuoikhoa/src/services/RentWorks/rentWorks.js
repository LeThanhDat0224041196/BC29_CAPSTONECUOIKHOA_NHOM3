import { request } from "../../configs/axios";

const fetchRentAPI = ()=>{
    return request ({
        url: '/thue-cong-viec',
        method: 'GET',
    })
};

const fetchRentIdAPI = (id)=>{
    return request ({
        url: `/thue-cong-viec/${id}`,
        method: 'GET',
    })
};

const fetchPostRentAPI = (data)=>{
    return request ({
        data: data,
        url: '/thue-cong-viec',
        method: 'POST',
    })
};

const fetchPutRentAPI = (id)=>{
    return request ({
        url: `/thue-cong-viec/${id}`,
        method: 'PUT'
    })
};

const fetchDeletedRenttAPI = (id)=>{
    return request({
        url: `thue-cong-viec/${id}`,
        method: 'DELETE',
    })
};


export {fetchRentAPI, fetchRentIdAPI, fetchPutRentAPI, fetchPostRentAPI, fetchDeletedRenttAPI}