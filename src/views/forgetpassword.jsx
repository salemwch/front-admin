import React, { useState } from 'react'
import auth from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Forgetpassword = () => {

    const [data,setdata] = useState()
    const changeHandler = (e)  =>{
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    
    const onsubmitHandler = (e) =>{
        e.preventDefault()
        auth.forget(data).then((res)=>{
            console.log(res.data)
            alert('check your email for notification code ');
        }).catch((error)=>{
            console.log(error)
        })

    }
    

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
                <button type='submit' href='' className="btn btn-primary w-100 py-8 fs-4 mb-4">Send notification code</button>
                <button type='submit'  className="btn btn-primary w-100 py-8 fs-4 mb-4">Try another methods</button>
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

export default Forgetpassword
