import classes from './App.module.css';
import NavBar from './components/UI/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
