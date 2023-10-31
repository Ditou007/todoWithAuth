// components/AppRoutes.js

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from './Home'
import TaskManager from './tasks/TaskManager'
import NotFound from './NotFound'
import About from './About'

const AppRoutes = () => (
  <Routes>
    <Route path='/home' element={<ProtectedRoute element={<Home />} />} />
    <Route
      path='/tasks'
      element={<ProtectedRoute element={<TaskManager />} />}
    />
    <Route path='/about' element={<ProtectedRoute element={<About />} />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default AppRoutes
