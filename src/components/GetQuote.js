import React from 'react'

export default function GetQuote() {
    const handleClick=(number)=>{
      window.location.href=  `tel:${8528221667}`;
    }
  return (
    <button className='bg-slate-500 rounded-full w-fit p-2 font-bold' onClick={handleClick}>
        Get Quote Now
    </button>
  )
}
