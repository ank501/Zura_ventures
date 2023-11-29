import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/ProjectPage'
import UploadPage from '../pages/UploadPage'

const RoutesComponent = () => {
  return (
    <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
  )
}

export default RoutesComponent