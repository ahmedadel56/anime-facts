import './components-style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimesList from './components/AnimesList';
import DetailsPage from './components/DetailsPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Routes>
          <Route exact path="/" element={<AnimesList />} />
          <Route exact path="/details" element={<DetailsPage />}>
            <Route path=":key" element={<DetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
