import React, { useEffect, useState } from 'react'
import category from '../../../services/category';
import { Link } from 'react-router-dom';

const Listcategory = () => {
  
    const[data,setdata] = useState([]);
    const getall = ()=>{
      const Token = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
      if(!Token){
        console.log("we didn't find your access token");
        return;
      }
        category.getall(Token).then((res)=>{
            setdata(res.data.AllCategories)
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
            
        
    }
    useEffect(()=>{
        getall();
    }, [])
    const deletcatec = (id)=>{
      const Token = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
      if(!Token){
        console.log("sorry you have no acces token")
        return;
      }
        category.deleted(Token,id).then((res)=>{
            getall();
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
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
                        <th scope="col">name</th>
                        <th scope="col" className="text-center">discription</th>
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
                            item.Name} 
                          
                        </td>
                        <td className="text-center fw-medium">{item.Description}</td>
                        <td><button onClick={()=>deletcatec(item._id)}>Delete</button></td>
                        <td> <Link className='update' to={`/updatecateg/${item._id}`}> <button>Update</button></Link></td>
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

export default Listcategory
