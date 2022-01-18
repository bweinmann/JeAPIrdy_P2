import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'
import NewScore from './components/NewScore'
import ScoreList from './components/ScoreList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {

  const [init, setInit] = useState(false);

  return (
    <div className="quiz">
      <Router>
        <Header />
       <Routes> 
        <Route path="/" element={ init ? <Quiz /> : <Home props={setInit} />} />
        <Route path="/scores" element={<ScoreList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

{/* <Route path="/quiz" element={ init ? <Quiz /> : <Home props={setInit} />} /> */}