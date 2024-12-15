import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import subcategory from '../../../services/subcategory';

const Updatesubcat = () => {
    const [data,setdata] = useState();
    const {id} = useParams();
    const changeHandler = (e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();
    const onsubmitHandler = (e) =>{
        e.preventDefault();
        const Token = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
        if(!Token){
          console.log("You need Access");
          return;
        }
        subcategory.updatedata(Token,id,data).then((res)=>{
            navigate("/list");
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }




  return (
    <div>
      <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Forms</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onsubmitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name='Name' onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                <input type="text" name='Description' onChange={changeHandler} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Updatesubcat
