import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HoroscopesList from './components/HoroscopesList';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { Route, Routes} from 'react-router-dom'
import About from './components/About';
import Main from './components/Main';

function App() {



  return (
    <div id="app">
      <Navigation />
      {/* <section className="header-section">
      <Header />
      </section> */}
      {/* <section className="horoscopes-section">
      <HoroscopesList />
      </section> */}
      <main>
        <Routes>
          {/* <Route path="/home/:day" element={<HoroscopesList/>} /> */}
          <Route path="/home"element={<Main/>}/>
          <Route path="/horoscopes"element={<HoroscopesList/>}/>
          <Route path="/about" element= {<About/>} />
          {/* <Route path="contact" element={<Contact/>} />
            */}
        </Routes> 
      </main>


    </div>

  );
}

export default App;
