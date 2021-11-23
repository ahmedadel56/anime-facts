import './components-style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimesList from './components/AnimesList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Routes>
          <Route exact path="/" element={<AnimesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
