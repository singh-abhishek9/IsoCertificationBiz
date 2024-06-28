import React from 'react'

export default function ColorText({text,normalText}) {
  return (
    <>
      <span className='text-5xl font-bold text-white'>
        {normalText} &nbsp;
    </span>
    <span className='text-4xl font-bold text-orange-400'>
        {text} &nbsp;
    </span>
  
    </>
  )
}
