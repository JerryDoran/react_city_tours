import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import TourList from './components/tour-list/TourList'

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
