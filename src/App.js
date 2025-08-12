import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Game from "./components/Game/Game";
import Recommend from "./components/Recommend/Recommend"
import MostPlayedGames from './components/MostplayedGames/MostPlayedGames';
import ExperienceSection from './components/ExperienceSection/Experience';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
       <Popular/>
       <Game/>
       <Recommend/>
       <MostPlayedGames/>
       <ExperienceSection/>
       <Footer/>
    </div>
  );
}

export default App;
