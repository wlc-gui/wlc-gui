import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WLANS from './routes/wlans/wlan';
import Security from './routes/sec/security';
import Header from './components/header';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/wlans/*" element={<WLANS />} />
          <Route path="/security/*" element={<Security />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
