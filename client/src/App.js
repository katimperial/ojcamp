import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Albums from './components/Albums';
import MusicCollection from './components/MusicCollection';
import Projects from './components/Projects';
import AddNew from './components/AddNew';

function App() {


  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums" element={<Albums />} />
        <Route path="music-collection" element={<MusicCollection />} />
        <Route path="projects" element={<Projects />} />
        <Route path="add-new" element={<AddNew />} />
      </Routes>
    </div>
  );
}

export default App;
