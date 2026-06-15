import axiosClient from "../services/axiosClient";


export const getProject=()=>{
    return axiosClient.get("/project");
};

export const createProject=(data)=>{
    return axiosClient.post("/project",data);
}

export const updateProject=(id,data)=>{
    return axiosClient.put(`/project/${id}`,data)
}

export const deleteProject=(id)=>{
    return axiosClient.delete(`/project/${id}`);
}