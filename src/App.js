import "./App.css";
import React, { Component }  from 'react';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return(
    <div className="App">
      <Footer />
      <Header />
      <Main />
      <Navbar />
    </div>
  );
}

export default App;
