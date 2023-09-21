import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import {Nav} from './components/Nav';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import LogNav from './components/LogNav';



function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <BrowserRouter>
    
    <Routes>
    <Route exact path="/" element={<>
      {isMobile ?  <Nav /> : <Header />}
    <Main/>
    </>} />
    <Route exact path="/login" element={<>
<LogNav/>
      <Login/>
    </>} />
    </Routes>
    
    </BrowserRouter>
    );
}

export default App;
