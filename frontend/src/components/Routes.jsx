import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/ProjectPage'
import UploadPage from '../pages/UploadPage'

const Routes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
    </div>
  )
}

export default Routes