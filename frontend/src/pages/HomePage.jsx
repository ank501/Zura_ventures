import React, { useState } from 'react'
import directright from "../images/directright.png"
import cuate from "../images/cuate.png"
import vector from "../images/Vector.png"
import CreateProjectModal from '../components/CreateProjectModal'
const HomePage = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div id='header'>
      <div className="p-5 w-24 justify-evenly flex">
        <img className='w-5 h-5' src={directright} alt="" srcset="" />
        <div className=" text-5 text-purple-600  font-medium" >LAMA.</div>
      </div>
    </div>
    <div className='max-w-5xl justify-center mx-auto mb-9'>
      <div className='text-purple-600  text-6xl font-bold leading-10'>Create a New Project</div>
       <img className='mx-auto mt-6' src={cuate} alt="" srcset="" />
       <p className='leading-7 text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
       <button onClick={openModal} className='flex justify-center bg-slate-900 text-white py-1.5 px-4 rounded-lg mx-auto mt-6'><img className='mr-1.5 mt-1.5 w-3.5 h-3.5' src={vector} alt={vector} srcset="" />Create Project</button>
       <CreateProjectModal isOpen={isModalOpen} closeModal={closeModal}/>
    </div>
    
    </>
  )
}

export default HomePage