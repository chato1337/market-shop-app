import './App.css';
import Home from './containers/Home';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Home>
        <Navbar />
        <Landing />
      </Home>
    </div>
  );
}

export default App;
