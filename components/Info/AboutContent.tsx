import React from 'react'

export default function AboutContent() {
  const transform = 'rotate(5.62deg)'
  return (
  
    <div className="flex flex-col items-center w-full font-sniglet text-white" style={{marginTop:'34px'}}>
    <h2 className='text-2xl' style={{ transform, fontSize:'45px' }}>meet the</h2>
    <h1 className='font-extrabold' style={{ transform, fontSize:'190px' }}>TEAM</h1>
  </div>
  )
}
