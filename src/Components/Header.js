import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">RECIPE APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link class="nav-link active" to="/">ADD RECIPES</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/search">SEARCH RECIPES</Link>
        </li>
        <li class="nav-item">
         <Link  class="nav-link" to="/view">VIEW RECIPES</Link>
        </li>
        <li class="nav-item">
         <Link  class="nav-link" to="/">LOG OUT</Link>
        </li>


        
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Header