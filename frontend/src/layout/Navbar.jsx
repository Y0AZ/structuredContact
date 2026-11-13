//import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar md:navbar-expand bg-1 navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Full Stack App
            </Link>
            <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>

            <Link className="btn btn-outline-light" to="/adduser">
              Add User
            </Link>
        </div>
        </nav>
    </div>
  )
}
