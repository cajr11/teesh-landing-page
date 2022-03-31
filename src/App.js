import classes from './App.module.css';
import NavBar from './components/UI/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
