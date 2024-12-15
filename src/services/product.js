import Http from './contexte_service';



const createdata = (token,data) =>{
    return Http.post("/product",data,{
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });
}

const getall = (token) =>{
    return Http.get("/product",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
const updatedata = (token,id,data) =>{
    return Http.put(`/product/${id}`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
const deletedata = (token,id) =>{
    return Http.delete(`/product/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
const Getone = (token,id) =>{
    return Http.get(`/product/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}
export default{createdata,getall,updatedata,deletedata,Getone};