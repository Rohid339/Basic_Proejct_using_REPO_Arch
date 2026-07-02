import axiosClient from "../services/axiosClient";

export const getAudit=()=>{
    return axiosClient.get("/audit");
}

export const getAuditById=(id)=>{
    return axiosClient.get(`/${id}`)
}