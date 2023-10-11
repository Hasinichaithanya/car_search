import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarSearch from './Components/CarSearch';
import carsData from './data.json';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/page/:page"
            element={<CarSearch cars={carsData} />}
          />
          <Route
          index
            element={<CarSearch cars={carsData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
