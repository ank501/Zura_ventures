import React from 'react'
import Modal from 'react-modal';

const Spotifyform = ({isOpen,closeModal}) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    className="bg-white p-8 rounded-md max-w-md mx-auto relative z-20"
    overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-60 backdrop-blur-sm"
  >
    <div>Spotify Upload</div>
    <form action="">
    <label class="block">
    <span class="block text-sm font-medium text-slate-700">Name</span>

    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    </label>
    <label class="block">
    <span class="block text-sm font-medium text-slate-700">Discription</span>

    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    </label>
    <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-4 rounded-sm">
     Upload
    </button>
    </form>
    </Modal>
  )
}

export default Spotifyform