import React from 'react'

function Button({text, setDesktop, setCellPhone, setColorBg}) {

const handleOnClick = (e) => {
        e.preventDefault()
        setDesktop('hidden')
        setCellPhone('')
        setColorBg('bg-neutral-100')
    }
  return (
    <button onClick={handleOnClick}>
    <div className='flex w-64 h-64 rounded-full items-center justify-center shadow-lg
                    font-thin hover:shadow-inner'>
                {text}                
        </div>
    </button>
  )
}

export default Button