import Http from "./contexte_service";

const createcategory =(token, data) =>{
    return Http.post("/category", data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}
const getall =(token)=>{
    return Http.get("/category",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
const deleted =(token,id)=> {
    return Http.delete(`/category/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
}
const updatedata =(token,id,data)=>{
    return Http.put(`/category/${id}`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
}
export default {createcategory,getall,deleted,updatedata};