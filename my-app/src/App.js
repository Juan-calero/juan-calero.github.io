import logo from './logo.svg';
import './App.css';
import Fold from './components/2.fold/Fold';
import Sobre from './components/3.sobre/Sobre';
import Contact from './components/7.contact/Contact';
import OQueFaco from './components/4.oQueFaco/OQueFaco';
import Experiencia from './components/5.experiencia/Experiencia';
import Projetos from './components/6.projetos/Projetos';
import Fixed from './components/1.fixed/Fixed';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({ duration: 1000, offset: 340 });
  return (
    <div className="App">
      <Fixed />
      <Fold />
      <Sobre />
      <OQueFaco />
      <Experiencia />
      <Projetos />
      <Contact />
    </div>
  );
}

export default App;
