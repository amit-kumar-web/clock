import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About.jsx';
import Skills from './assets/components/Skills.jsx';
import Project from './assets/components/Project.jsx';
import Contact from './assets/components/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/skills",
    element: <Skills/>
  },
  {
    path: "/project",
    element:<Project/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
