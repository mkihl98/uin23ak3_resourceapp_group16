// App.jsx
//import { useState } from 'react';
//import { ReactDOM } from 'react-dom/client';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Sanity from './components/Sanity';
import NoPage from './components/NoPage';
import CSS from './components/CSS';
import HTML from './components/HTML';
import JavaScript from './components/JavaScript';
import './styles/styles.scss'; // Import the main SCSS file
import ReactComponent from './components/ReactComponent';


export default function App() {
  //const [Resources, setResources] = useState([]);



    return (
      
      <Routes>    
      <Route path="/" element={<Layout />}>
        
        <Route path="/sanity" element={<Sanity />}/>
        <Route path="/css" element={<CSS />}/>
        <Route path="/react" element={<ReactComponent/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/javascript" element={<JavaScript/>}/>
              
          <Route path ="*" element={<NoPage />}/>
        </Route>
      </Routes> 
      
      
      
   
         

    );
  }


