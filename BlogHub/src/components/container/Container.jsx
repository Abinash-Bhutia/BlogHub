import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container

// PAGE
//  ↓
// "What page am I showing?"

// CONTAINER
//  ↓
// "How should the page content be positioned?"

// COMPONENT
//  ↓
// "What functionality/UI should I display?"