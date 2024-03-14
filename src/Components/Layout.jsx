/*import { useState } from 'react'

import ResourceList from './ResourceList'*/
//import Nav from './Nav'
import {Outlet, Link } from "react-router-dom";

export default function Layout({children}){
  return (
    <>
    <div id="container">
    
  <nav>
      <ul>
        <li>
          <Link to="/javascript">Javascript</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/headlesscms">Headless CMS</Link>
        </li>
        <li>
          <Link to="/html">HTML</Link>
        </li>
      </ul>
    </nav>
    
    <main>
        {children}
        <Outlet />
    </main>
    
    </div>
   
    </>
  )
}
