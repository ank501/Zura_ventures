import React from 'react'
import directright from "../images/directright.png"

const HomePage = () => {
  return (
    <>
    <div id='header'>
      <div className="p-5 w-24 justify-evenly flex">
        <img className='w-5 h-5' src={directright} alt="" srcset="" />
        <div className=" text-5 text-purple-600  font-medium" >LAMA.</div>
      </div>
    </div>
    
    </>
  )
}

export default HomePage