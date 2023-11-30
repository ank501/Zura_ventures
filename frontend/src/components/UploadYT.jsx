import React, { useState } from 'react'
import yt from "../images/Frame 1.png"
import YTform from './YTform'

const UploadYT = () => {
    const [isytopen ,setytOpen] = useState(false)
    const closeYt = ()=>{
      setytOpen(false)
    }
    const openYt = () => {
      setytOpen(true)
    }
  return (
    <div className='p-6 max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer flex items-center space-x-4' onClick={openYt}>
        <img className='w-6 h-6' src={yt} alt="" />
        <div>Upload Youtube Vedio</div>
        <YTform isOpen={isytopen} closeModal={closeYt}/>
    </div>
  )
}

export default UploadYT