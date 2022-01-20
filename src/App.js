import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Horoscopes from './components/Horoscopes';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Navigation />
      <Header />
      <Horoscopes />


    </div>

  );
}

export default App;
