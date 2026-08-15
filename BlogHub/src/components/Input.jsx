import React, { useId } from 'react'
import { forwardRef } from "react";

const Input = forwardRef(function Input({      // using the forwardRef(props, ref) hook.
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus: bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

// forwardRef hook => It is used in React when you want to pass a 'ref' from a parent component to an element inside a child component.
// or through this hook we can pass the 'ref' of input and change the input state in another component through 'ref' 