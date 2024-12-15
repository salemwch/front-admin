import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div>
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="" className="text-nowrap logo-img">
            <img src="../assets/images/logos/logo-light.svg" alt="" />
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:home-smile-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">Category</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addcatec" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:layers-minimalistic-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Create</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/category" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:danger-circle-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">List</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">subcategory</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addsubcat" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:layers-minimalistic-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Create</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/list" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:danger-circle-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">List</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">Product</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/product" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:layers-minimalistic-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Create</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/listproduct" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:danger-circle-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">List</span>
              </Link>
            </li>
            
            <li className="nav-small-cap">
              <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4" />
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./icon-tabler.html" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:sticker-smile-circle-2-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Icons</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./sample-page.html" aria-expanded="false">
                <span>
                  <iconify-icon icon="solar:planet-3-bold-duotone" className="fs-6" />
                </span>
                <span className="hide-menu">Sample Page</span>
              </Link>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-primary-subtle position-relative mb-7 mt-7 rounded-3"> 
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">Upgrade to pro</h6>
                <Link to="#" target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</Link>
              </div>
              <div className="unlimited-access-img">
                <img src="../assets/images/backgrounds/rocket.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    </div>
  )
}

export default Sidebar
