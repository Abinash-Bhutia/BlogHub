import React, { useId } from 'react'

function Select({
    options = [],     // we want to use loops on options so we need by default array
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                id={id}
                {...props}
                ref={ref}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)

// we can also use forwardRef() hook with wrap the element in 'export default'

// note: If any element there is no value and we use loops on that then we face crashs, so avoid that we use conditions before using loops.