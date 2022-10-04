import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Navigation/Navbar";

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
