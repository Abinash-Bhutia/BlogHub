import React from 'react'

function Button({            // these are set some default values & can override by user
    children,               //  children  is a text pass by user
    type ='button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',      // className empty beacause user can add some className
    ...props            // if any other proprties send by user spread that
}) {
  return (            // backticks are use in curlibresses, backticks are use beacuse user can set some properties
    <button className={`px-4 py-2  rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button 