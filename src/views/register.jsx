import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../services/auth'

const Register = () => {

    const [data,setdata] = useState({items: 'admin'})
      const changeHandler = (e) =>{
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()
    const onsubmitHandler = (e) =>{
        e.preventDefault()   
        auth.createadmin(data).then((res)=>{
            navigate('/login')
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
       
    }
    const handleClick = () => {
      alert('your signup done!');
    };
    




  return (
    <div>
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0">
            <div className="card-body">
              <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                <img src="../assets/images/logos/logo-light.svg" alt="" />
              </a>
              <p className="text-center">Your Social Campaigns</p>
              <form onSubmit={onsubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" name='email' className="form-control" onChange={changeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password"  name='password' className="form-control" onChange={changeHandler} id="exampleInputPassword1" />
                
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">full name</label>
                  <input type="text" name='fullname' className="form-control" onChange={changeHandler} id="exampleInputPassword1" />
                </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                  <input type="number" name='phone' className="form-control" onChange={changeHandler} id="exampleInputPassword1" />
                </div>
                </div>
                <button type='submit' to='/login' onClick={handleClick}  className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign up</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
