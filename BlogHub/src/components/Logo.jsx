import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fWLL56b5c-rMB3FBjoL0-AX5KSw7OF0srIh0KLm2feBggzfGRJrfVWE&s=10"
        alt="Logo"
        width={width}
      />
    </div>
  )
}

export default Logo