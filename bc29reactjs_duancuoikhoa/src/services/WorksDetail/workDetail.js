import { request } from "../../configs/axios";

const fetchWorkDetailAPI = ()=>{
    return request({
        url: '/chi-tiet-loai-cong-viec',
        method: 'GET',
    })
}

const fetchWorkDetailIdAPI = (id)=>{
    return request({
        url:`/chi-tiet-loai-cong-viec/${id}`,
        method: 'GET',
    })
};

const fetchAddWorkDetailAPI = (data)=>{
    return request({
        url: `/chi-tiet-loai-cong-viec`,
        method: 'POST',
        data: data,
    })
}

const fetchEditWorkDetailAPI = (id)=>{
    return request({
        url: `/chi-tiet-loai-cong-viec/${id}`,
        method: 'PUT',
    })
}

const fetchDeleteWorkDetailAPI = (id)=>{
    return request({
        url: `/chi-tiet-loai-cong-viec/${id}`,
        method: 'DELETE'
    })
}

const fetchAddWorkGroupDetailAPI = ()=>{
    return request({
        url: `/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`,
        method: 'POST'
    })
}

const fetchAddImgWorkDetailAPI = (MaNhomLoaiCongViec)=>{
    return request({
        url: `/chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${MaNhomLoaiCongViec}`,
        method: 'POST'
    })
}

const fetchEditWorkGroupDetailAPI = (id)=>{
    return request({
        url: `/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${id}`,
        method: 'PUT'
    })
}

export {fetchWorkDetailAPI, fetchWorkDetailIdAPI, fetchEditWorkGroupDetailAPI, fetchEditWorkDetailAPI, fetchDeleteWorkDetailAPI, fetchAddWorkGroupDetailAPI, fetchAddWorkDetailAPI, fetchAddImgWorkDetailAPI}