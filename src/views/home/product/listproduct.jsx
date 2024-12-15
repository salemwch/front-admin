import React, { useEffect, useState } from "react";
import product from '../../../services/product';
import { Link } from "react-router-dom";



const Listproduct = () => {

    const [data,setdata] = useState([]);
    const createdata = ()=>{
      const NewToken = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
      if(!NewToken){
        console.log("sorry you have no access");
        return;
      }
        product.getall(NewToken).then((res)=>{
            setdata(res.data.AllData);
            console.log("data fetched ",res.data)
        }).catch((error)=>{
            console.log("error fetching data: ",error);
        })
    }

    useEffect(()=>{
        createdata();
    },[]);
    const Delete = (id) =>{
      const NewToken = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
      if(!NewToken){
        console.log("Access Needed");
        return;
      }
        product.deletedata(NewToken,id).then((res)=>{
            createdata();
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })

    }

  return (
    <div>
      <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">status page</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap align-middle mb-0">
                    <thead>
                      <tr className="border-2 border-bottom border-primary border-0"> 
                        <th scope="col" className="ps-0">numero</th>
                        <th scope="col">Ref</th>
                        <th scope="col" className="text-center">Price</th>
                        <th scope="col" className="text-center">Description</th>
                        <th scope="col" className="text-center">Qnt</th>
                        <th scope="col" className="text-center">image</th>
                        <th scope="col" className="text-center">details</th>
                        <th scope="col" className="text-center">Delete</th>
                        <th scope="col" className="text-center">Update</th>
                        
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        data.map((item,index)=>{
                            return(
                                <tr key={index}>
                        <th scope="row" className="ps-0 fw-medium">
                          <span className="table-link1 text-truncate d-block">{index}</span>
                        </th>
                        <td>{
                            item.Ref} 
                        </td>
                        <td className="text-center fw-medium">{item.Price}</td>
                        <td className="text-center fw-medium">{item.Description}</td>
                        <td className="text-center fw-medium">{item.Qnt}</td>
                        <td className="text-center fw-medium"><img alt="/" height={100}  width={100} src={`http://localhost:3000/file/${item.image[0]}`}></img></td>
                        <td className="text-centre fw-medium"> <Link className="test"  to={`/detailproduct/${item._id}`}> View Details </Link> </td>
                        <td><button onClick={()=>Delete(item._id)}>Delete</button></td>
                        <td> <Link className='update' to={`/Updateproduct/${item._id}`}> <button>Update</button> </Link> </td>
                      </tr>
                            )
                        })
                    }
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Listproduct
