import React from 'react';
import './App.css';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Interactiv from "./components/content/main/interactiv/Interactiv";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import MainContent from "./components/content/main/MainContent";

function App() {
    return (
        <div className="grid">
            <Header/>
            <NavbarContainer/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
