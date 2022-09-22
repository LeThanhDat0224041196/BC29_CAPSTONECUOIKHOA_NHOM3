import React from 'react'
import './HeaderList.scss'
export default function HeaderList() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Fiverr Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i class="fa-solid fa-globe"></i> English</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">$ USD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Become a Seller</a>
            </li>
          </ul>
        </div>
    </nav>

  )
}
