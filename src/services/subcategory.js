import Http from "./contexte_service";

const subcategory = (token,data) =>{
    return Http.post('/subcategory',data,{
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
}
const getdata = (token)=>{
    return Http.get("/subcategory",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}

const updatedata = (token,id, data) =>{
    return Http.put(`/subcategory/${id}`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
const deleteddata = (token,id)=>{
    return Http.delete(`/subcategory/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}
export default{subcategory,getdata,updatedata,deleteddata};