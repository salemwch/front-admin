import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import product from '../../../services/product';

const Updateproduct = () => {
    const[galle,setgalle] = useState({})
    const [data,setdata] = useState({})
    const changeimage = (e) =>{
        setgalle(e.target.files);
    }
    const {id} = useParams();
    const changeHandler = (e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    const navigate = useNavigate();
    const onsubmitHandler = (e)=>{
        e.preventDefault();
        const NewToken = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
        if(!NewToken){
          console.log("you need access for thsi action");
          return;
        }
        const formData = new FormData()
        formData.append("Ref",data.Ref);
        formData.append("Price",data.Price);
        formData.append("Description",data.Description);
        formData.append("Qnt",data.Qnt);
        for(let i = 0; i <= galle.length;i++){
            formData.append("files",galle[i])
        }
        product.updatedata(NewToken,id,formData).then((res)=>{
          navigate("/listproduct")
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
                    <label htmlFor="exampleInputEmail1" className="form-label">Refrence</label>
                    <input type="text" name='Ref' onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                    <input type="number" name='Price' onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                    <input type="text" name='Description' onChange={changeHandler} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Galleries</label>
                    <input type="file" name='files' onChange={changeimage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" multiple/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">qantity</label>
                    <input type="number" name='Qnt' onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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

export default Updateproduct
