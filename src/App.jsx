import Component from './component/component.jsx'
import './App.css'
import Funk1 from './component/hooks.jsx'
import { useState } from 'react';
import Navbar from './component/navbar.jsx';
import Card from './component/card.jsx';
import CardGrid from './component/cardgrid.jsx';
// import {BrowserRouter, Routes, Route, link} from 'react-router-dom'

function App() {


  return (

    <>
<Navbar />
    <h1>Welcome to My App</h1>
    <CardGrid />
    

     
    </>
  )
}

export default App
