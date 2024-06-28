import React from 'react'

export default function CallUsButton() {
    const handleButton=(number)=>{
            window.location.href=  `tel:${8528221667}`;
    }
  return (
    <button className='bg-green-300 p-2 w-fit rounded-full font-medium' onClick={handleButton}>
        CALL US +91 85282-21667
    </button>
  )
}
