import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import WLANS from './routes/wlans/wlan';
import Security from './routes/sec/security';
import Header from './components/header';

function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
    
  );
}

export default App;
