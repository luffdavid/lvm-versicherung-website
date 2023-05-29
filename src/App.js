import './App.css';
import Home from './components/routes/Home';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import TopBar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <TopBar />
      <Routes>
      
      <Route
        path="/"
        element={<Home />}
        />
      <Route
        path="/impressum"
        element={<Home />}
        />
        <Route
        path="/offenheitslegungspflicht"
        element={<Home />}
        />
        <Route
        path="/datenschutz"
        element={<Home />}
        />
          <Route
        path="/stellenanzeigen"
        element={<Home />}
        />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
