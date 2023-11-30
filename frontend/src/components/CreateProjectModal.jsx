import React from 'react'
import Modal from 'react-modal';

const CreateProjectModal = ({isOpen , closeModal}) => {
 const createProject = ()=>{
    console.log("project created")
    closeModal();
 }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    className="bg-white p-8 rounded-md max-w-md mx-auto relative z-20"
    overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-60 backdrop-blur-sm"
  >
    <div className=''>
        <h4>Project Name</h4>
        <input className='border-2' type="text" />
        <button className='bg-slate-900 text-white py-1.5 px-4 rounded-lg ml-2' onClick={closeModal}>Cancel</button>
        <button className='bg-slate-900 text-white py-1.5 px-4 rounded-lg ml-2' onClick={createProject}>Create</button>
    </div>
    </Modal>
  )
}

export default CreateProjectModal