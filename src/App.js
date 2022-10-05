import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return(
    <div className="App">
      <Footer />
      <Main />
      <Navbar />
    </div>
  );
}

export default App;
