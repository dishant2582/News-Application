//import PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from "react-router-dom";

const Navbar = ()=> {

  let location = useLocation();

  return (
    <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      <a className="navbar-brand" href="/">NEWS APP</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
          {/* <li className="nav-item"><a className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" href="/">Home</a></li> */}
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/"?"active":""}`}  href="/">Home</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/business"?"active":""}`} href="/business">Business</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/entertainment"?"active":""}`}  href="/entertainment">Entertainment</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/general"?"active":""}`}  href="/general">General</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/health"?"active":""}`}  href="/health">Health</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/science"?"active":""}`}  href="/science">Science</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/sports"?"active":""}`}  href="/sports">Sports</a></li>
          <li className="nav-item"><a className={`nav-link ${location.pathname === "/technology"?"active":""}`}  href="/technology">Technology</a></li>
      </ul>
      </div>
      {/* <div>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
      </div> */}
      </div>
    </nav>
    </div>
  )
}

export default Navbar