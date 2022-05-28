import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">RECIPE APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" to="/">ADD RECIPES</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/search">SEARCH RECIPES</Link>
        </li>
        <li className="nav-item">
         <Link  className="nav-link" to="/view">VIEW RECIPES</Link>
        </li>
        <li className="nav-item">
         <Link  className="nav-link" to="/">LOG OUT</Link>
        </li>


        
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Header