import React from 'react';
import './App.css';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Interactiv from "./components/interactiv/Interactiv";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div className="grid">
          <Header/>
          <Navbar/>
          <Content/>
          <Interactiv/>
          <Footer/>

      </div>
  );
}

export default App;
