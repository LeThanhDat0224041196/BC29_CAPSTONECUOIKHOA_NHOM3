import React from 'react'

export default function SearchHeader() {
  return (
    <div className='navbar-nav'>
      <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search" /></button>
        </form>
    </div>
  )
}
