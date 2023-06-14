import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Games from './Games.jsx'
import Forum from './Forum.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import LogInPage from './LogInPage.jsx'
import ErrorPage from './ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import { useState } from 'react'
import { UserContext } from './UserContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/home',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/games',
    element: <Games/>
  },
  {
    path:'/forum',
    element: <Forum/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/login',
    element: <LogInPage/>
  }

])

const contextValue = 'hello hi yo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={contextValue}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  </React.StrictMode>,
)
