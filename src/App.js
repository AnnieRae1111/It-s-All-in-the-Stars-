import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HoroscopesList from './components/HoroscopesList';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './components/themes';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [isToggled, setIsToggled] = useState('false');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    setIsToggled(!isToggled);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div id="app">
        <Navigation
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          themeToggler={themeToggler}
        />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/horoscopes" element={<HoroscopesList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
