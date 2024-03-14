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
      {/*by using link, we route /html and so on to the routes called /html which import info from the different files*/}
    </nav>
    
    <main>
        {children}
        <Outlet />
    </main>
    
    </div>
   
    </>
  )
}
