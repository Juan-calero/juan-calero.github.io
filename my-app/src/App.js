import logo from './logo.svg';
import './App.css';
import Fold from './components/2.fold/Fold';
import Sobre from './components/3.sobre/Sobre';
import Contact from './components/7.contact/Contact';
import OQueFaco from './components/4.oQueFaco/OQueFaco';
import Experiencia from './components/5.experiencia/Experiencia';
import Projetos from './components/6.projetos/Projetos';
import Social from './components/1.fixed/socialLeft/Social';

function App() {
  return (
    <div className="App">
      <Social />
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
