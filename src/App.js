import './App.css';
import Home from './components/routes/Home';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import TopBar from './components/navigation/Topbar';
import Stellenanzeigen from './components/routes/Stellenanzeigen';
import Offenlegungspflicht from './components/routes/Offenlegungspflicht';
import Impressum from './components/routes/Impressum'
import Datenschutz from './components/routes/Datenschutz'
import EndContainer from './components/container/EndContainer'
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
        element={<Impressum />}
        />
        <Route
        path="/offenlegungspflicht"
        element={<Offenlegungspflicht />}
        />
        <Route
        path="/datenschutz"
        element={<Datenschutz />}
        />
          <Route
        path="/stellenanzeigen"
        element={<Stellenanzeigen />}
        />
        </Routes>
        <EndContainer />
        </BrowserRouter>
    </div>
  );
}

export default App;
