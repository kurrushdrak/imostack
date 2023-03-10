
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
   
      <header className="App-header">
        <img src="https://images.aasaan.shop/stores/wellstackimo/logo/logo_1660900962711.png"  className="App-logo" alt="logo" />
        <p>
          wellstackimo
        </p>
        <a
          className="App-link"
          href="https://wellstackimo.aasaan.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          open
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
