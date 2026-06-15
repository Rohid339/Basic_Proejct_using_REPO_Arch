import axiosClient from "../services/axiosClient";
export const getDepartment=()=> {
    return axiosClient.get("/department");
};

export const createDepartment = (data)=>{
    return axiosClient.post("/department",data);
}

export const  updateDepartment = (id,data)=>{
    return axiosClient.put(`/department/${id}`,data);
}

export const deleteDepartment = (id)=>{
    return axiosClient.delete(`/department/${id}`);
}