import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {PokeList} from './components/PokeList'
import {Router, HashRouter, Routes, Route} from 'react-router-dom';
import {TedsPage} from './components/TedsPage'
import {ErrorPage} from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
        <Navbar/>
        <Routes>
          <Route path = "/pokemon" element = {<PokeList />}/>
          <Route path = "*" element = {<TedsPage />}/>
        </Routes>
        </div>
      </HashRouter>
      
      
    </div>
  );
}

export default App;
