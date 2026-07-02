import axiosClient from "../services/axiosClient.js";

export const getDesignations=()=>{
    return axiosClient.get("/designation");
};

export const createDesignation=(data)=>{
    return axiosClient.post("/designation",data);
}

export const updateDesignation=(id,data)=>{
    return axiosClient.put(`/designation/${id}`,data)
}