import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MathPage from './components/MathPage';
import SavedCalculationsPage from './components/SavedCalculationsPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Math Page</Link>
              </li>
              <li>
                <Link to="/saved">Saved Calculations</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MathPage />} />
            <Route path="/saved" element={<SavedCalculationsPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
