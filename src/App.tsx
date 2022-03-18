import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <div data-testid="app-load" className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
