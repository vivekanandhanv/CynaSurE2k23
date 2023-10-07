import './App.css';
import Cards from './Components/Cards/Cards';
import Cards2 from './Components/Cards2/Cardds2';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HeadOfKite from './Components/HeadOfKite/HeadOfKite';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import PosterMain from './Components/PosterCard/Poster';
import ProjectExpo from './Components/ProjectExpo/ProjectExpo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <PosterMain />
      <HeadOfKite />
      <Cards />
      <Cards2 />
      <ProjectExpo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
