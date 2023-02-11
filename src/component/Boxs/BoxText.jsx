import React from 'react'

function BoxText({boxTitle, texto1, texto2, texto3}) {
  return (
    <div className='text-black font-thin text-xs text-center  justify-center flex flex-col p-3 '>

      <div className='font-medium'>
      {boxTitle}
      </div>
     
      <div className='flex justify-center items-center'>
      <span>{texto1}</span>
       
      </div>
      <br />
      <div>
      <span>{texto2}</span>
    
      </div>
      
    

      </div>
  )
}

export default BoxText