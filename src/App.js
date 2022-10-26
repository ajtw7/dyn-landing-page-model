// import logo from './logo.svg';
import './App.css';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      {/* <h1>We Here!</h1> */}
      <HeroSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
}

export default App;
