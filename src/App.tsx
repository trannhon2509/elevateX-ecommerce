import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes/Approute';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={React.createElement(
              route.layout,
              { children: React.createElement(route.page) } 
            )}
          />
        ))}
        {privateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={React.createElement(
              route.layout,
              { children: React.createElement(route.page) } 
            )}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
