import React from 'react';
import '../assets/libs/bootstrap/css/bootstrap.css';

import Header from './Header';
import Routing from './Routing';
import Footer from "./Footer";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
            <Header/>
            <Routing/>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
