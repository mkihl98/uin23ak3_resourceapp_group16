// App.jsx
//import { useState } from 'react';
//import { ReactDOM } from 'react-dom/client';
import { Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import HeadlessCMS from './Components/HeadlessCMS';
import NoPage from './Components/NoPage';
import CSS from './Components/CSS';
import HTML from './Components/HTML';
import JavaScript from './Components/JavaScript';
import './styles/app.scss'; // Import the main SCSS file
import ReactComponent from './Components/ReactComponent';


export default function App() {
  //const [Resources, setResources] = useState([]);



    return (
      
      <Routes>    
      <Route path="/" element={<Layout />}>
        
        <Route path="/headlesscms" element={<HeadlessCMS />}/>
        <Route path="/css" element={<CSS />}/>
        <Route path="/react" element={<ReactComponent/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/javascript" element={<JavaScript/>}/>
              
          <Route path ="*" element={<NoPage />}/>
        </Route>
      </Routes> 
      
      
      
   
         

    );
  }


