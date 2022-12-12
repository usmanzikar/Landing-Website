
import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import aboutimage from './images/download.png';
import aboutimage1 from './images/Frame 19.png';



function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage1} title='Comes with all You Need for Daily life' button='Get the App'/>
      <Presentation/>
      <About image={aboutimage} title='Download and get the app Now' button='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
