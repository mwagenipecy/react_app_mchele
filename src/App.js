import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/work";
import Testmonial from "./Components/Testmonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Home/>
        <About/>
        <Work/>
        <Testmonial/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
