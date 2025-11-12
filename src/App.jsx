import React from 'react'
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './Page/Home';
import Services from './Page/Services';
import Login from './Page/Login.jsx';


function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Pages où la topbar ne doit pas apparaître
  const hideTopbarPaths = ['/login', '/signup'];
  const showTopbar = !hideTopbarPaths.includes(location.pathname);

  return (
    <div className="App">
      {showTopbar && <Topbar />}
      <main className={`main-content ${!showTopbar ? 'main-content-no-topbar' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  );
}

function Signup() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Inscription</h1>
      <p>Page d'inscription</p>
    </div>
  );
}

export default App;