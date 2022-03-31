import classes from './App.module.css';
import NavBar from './components/UI/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Hero />
      <Services />
      <SignUp />
    </div>
  );
}

export default App;
