import React from 'react'

export default function UserHeader() {
  return (
    <div className='navbar'>
      <button type="button" class="btn header__btn__sign shadow-none">Sign in</button>
      <button type="button" class="btn header__btn__join btn-outline-success shadow-none">Join</button>
    </div>
  )
}
