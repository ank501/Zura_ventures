import React, { useState } from 'react'
import directright from "../images/directright.png"
import UploadYT from '../components/UploadYT'
import UploadSpotify from '../components/UploadSpotify'
import UploadRSS from '../components/UploadRSS'
import YTform from '../components/YTform'


const UploadPage = () => {
  
  return (
    <div>
      {/* sidebar */}
      <div className='w-1/4 p-1 bg-purple-100 fixed h-full'>
       <div>
        <div className="p-5 w-24 justify-evenly flex">
        <img className='w-5 h-5' src={directright} alt="" srcset="" />
        <div className=" text-5 text-purple-600  font-medium" >LAMA.</div>
        </div>
        <div className='p-4'>
        <button className='block  px-14 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-1'>Projects</button>
        <button className='block max-w-xl px-14 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-1'>Widget configuration</button>
        <button className='block max-w-xl px-14 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-1'>Deployment</button>
        <button className='block max-w-xl px-14 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-1'>Pricing</button>
        </div>
      </div>
      </div>

      {/* top bar */}
      <div className='h-full fixed right-0 border-2  w-3/4 ml-auto '>
        <div className='flex justify-start p-4 text-purple-600 ml-13  text-4xl font-bold leading-10'>Uploads</div>
        <div className='flex justify-evenly p-2'>
          <UploadYT/>
          <UploadSpotify/>
          <UploadRSS/>
        </div>
      </div>
       {/* <YTform isOpen={isytopen} closeModal={closeYt} UploadYT={openYt} /> */}
    </div>
  )
}

export default UploadPage