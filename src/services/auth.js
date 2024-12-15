import Http from "./contexte_service";

const login = (data) =>{
    return Http.post("/auth/login",data)
}
const forget = (data) =>{
    return Http.post("/auth/forgetpassword",data)
}
const createadmin = (data) =>{
    return Http.post("/admin",data)
}
const resetpassword = (token,data) =>{
    return Http.post(`/auth/${token}`, data)
}
const logout = (id) =>{
    return Http.post("/auth/:id", id)
}
export default{login,forget,createadmin,resetpassword,logout}