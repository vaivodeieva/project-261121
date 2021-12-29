import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Workout from './Views/Workout';
import Page404 from './Views/Page404';
import Notifications from './Views/Notifications';
import Settings from './Views/Settings';


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Page404 /> } />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
