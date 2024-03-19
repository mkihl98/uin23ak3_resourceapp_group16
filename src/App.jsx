import { Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import HeadlessCMS from './Components/HeadlessCMS';
import NoPage from './Components/NoPage';
import CSS from './Components/CSS';
import HTML from './Components/HTML';
import JavaScript from './Components/JavaScript';
import './styles/app.scss'; // Import the SCSS file
import ReactComponent from './Components/ReactComponent';
//these are all files that are imported 


export default function App() {

    return (
      
      <Routes>    
      <Route path="/" element={<Layout />}>
        
        <Route path="/headlesscms" element={<HeadlessCMS />}/>
        <Route path="/css" element={<CSS />}/>
        <Route path="/react" element={<ReactComponent/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/" element={<JavaScript/>}/> {/*Hjelper koden med å route til javascript når man åpner forsiden */}
        <Route path="/javascript" element={<JavaScript/>}/>
        {/*the path is linked to layout, and the paths gets imported info from their elements*/}
              
          <Route path ="*" element={<NoPage />}/>
          {/*this path is routed to show a msg if other routes stop working */}
        </Route>
      </Routes>    
    );
  }


