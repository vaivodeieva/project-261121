import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Video from './Views/Video';


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/videos" element={<Video />} />

            {/* <Route>
                        <Page404 />
                    </Route> */}

          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
