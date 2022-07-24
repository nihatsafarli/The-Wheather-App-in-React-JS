import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <ul className="navbar">
        <li className="nav-item">
          The Whether
          <div class="ping"></div>
        </li>
        <li className="nav-item">Warning</li>
        <li className="nav-item">Map</li>
        <li className="nav-item">Satellite</li>
        <li className="nav-item">News</li>
    </ul>
  )
}

export default Header