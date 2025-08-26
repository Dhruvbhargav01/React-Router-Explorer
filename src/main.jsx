// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ReactDOM, { createRoutesFromElements, Route } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './components/About/About.jsx'
// import Home from './components/Home/Home.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// //Method 2 Of Routing

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>} >
//       <Route path='' element={<Home/>} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact/>} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader} // loader kya krta hai wo jb user cursor ko element pe hover hi krta hai , usi momment pe fetching of data backend pehle hi shuru hojata hai , that means useEffect se bhi pehle.
//       path='github' 
//       element={<Github/>} />
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router = {router} />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'


import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Method 2 Of Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        loader={githubInfoLoader} 
        path='github' 
        element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
