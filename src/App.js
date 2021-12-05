import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Works from './Views/Works';
import Page404 from './Views/Page404';


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<Page404 /> } />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
