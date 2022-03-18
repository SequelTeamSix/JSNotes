import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {PokeList} from './components/PokeList'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PokeList/>
    </div>
  );
}

export default App;
