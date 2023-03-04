import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

import Header from "./Components/PageLayout/Header";
import Home from "./Components/Verticals/Home";
import Rickshaws from "./Components/Verticals/Rickshaws";


function App() {
  return (
      <>
          <BrowserRouter>
              <Header/>
              <Routes>

                  <Route path="/" element={<Home/>} />

                  <Route path="/rickshaws" element={<Rickshaws/>} />


              </Routes>
          </BrowserRouter>
      </>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
