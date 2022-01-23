import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HoroscopesList from './components/HoroscopesList';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div id="app">
      <Navigation />
      <section className="header-section">
      <Header />
      </section>
      {/* <section className="horoscopes-section">
      <HoroscopesList />
      </section> */}
      <main>
        <Routes>
          <Route path="/home/:day" element={<HoroscopesList/>} />
          <Route path="/home"/>
        </Routes>
      </main>


    </div>

  );
}

export default App;
