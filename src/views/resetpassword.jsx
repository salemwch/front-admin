import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import auth from '../services/auth'

const Resetpassword = () => {

    const[data, setdata] = useState()
    const {token} = useParams()
    const changeHandler = (e) =>{
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()
    const onsubmitHandler = (e) =>{
        e.preventDefault()
        auth.resetpassword(token,data).then((res)=>{
            navigate('/login')
            console.log(res.data)
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
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label"> new Password</label>
                  <input aria-label='new password' type="password" name='password' className="form-control" onChange={changeHandler} id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label"> confirm Password</label>
                  <input aria-label='confirm password' type="password" name='password' className="form-control" onChange={changeHandler} id="exampleInputPassword1" />
                </div> */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input className="form-check-input primary"  onChange={changeHandler} type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                      Remeber this Device
                    </label>
                  </div>
                  <button   type='submit'  className="btn btn-primary w-100 py-8 fs-4 mb-4">Reset Password</button>
                </div>
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

export default Resetpassword