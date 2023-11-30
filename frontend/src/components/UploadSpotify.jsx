import React, { useState } from 'react'
import spotify from "../images/Frame 2.png"
import Spotifyform from './Spotifyform'
import Modal from 'react-modal';

const UploadSpotify = () => {
  const [isSpotifyOpen ,setSpotify] = useState(false);

    const openSpotify = () => {
        setSpotify(true)
    }
    const closeSpotify = () =>{
        setSpotify(false)
    }
  return (
    <div className='p-6 max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer flex items-center space-x-4' onClick={openSpotify}>
        <img className='w-6 h-6' src={spotify} alt="" />
        <div>Upload Spotify Podcast</div>
        <Spotifyform isOpen={isSpotifyOpen} closeModal={closeSpotify}/>
    </div>
  )
}

export default UploadSpotify