import React, { useState } from 'react'
import rss from "../images/image 1.png"
import RSSform from './RSSform'


const UploadRSS = () => {
    const [isRSSopen ,setRSSopen] = useState(false)
    const openRSS = () => {
       setRSSopen(true)
    }
    const closeRSS = () => {
        setRSSopen(false)
     }
  return (
    <div className='p-6 max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer flex items-center space-x-4' onClick={openRSS}>
    <img className='w-6 h-6' src={rss} alt="" />
    <div>Upload from RSS</div>
    <RSSform isOpen={isRSSopen} closeModal={closeRSS}/>
</div>
  )
}

export default UploadRSS