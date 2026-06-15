import axiosClient from "../services/axiosClient.js";

export const getEmployees=()=>{
    return axiosClient.get("/employees");
};

export const createEmployee=(data)=>{
    return axiosClient.post("/employees",data);
}

export const updateEmployee=(id,data)=>{
    return axiosClient.put(`/employees/${id}`,data)
}

export const deleteEmployee=(id)=>{
    return axiosClient.delete(`/employees/${id}`);
}