import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HoroscopesList from './components/HoroscopesList';
import Navigation from './components/Navigation';
import { Route, Routes} from 'react-router-dom'
import About from './components/About';
import Main from './components/Main';
import styled, { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles } from './components/themes'
import { useState } from 'react'



function App() {
const[theme, setTheme]= useState('light')

const themeToggler = () => {
  theme === 'light' ? setTheme('dark'): setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <div id="app">
      <Navigation them={theme} themeToggler={themeToggler}/>
      <main>
        <Routes>
          <Route path="/"element={<Main/>}/>
          <Route path="/horoscopes"element={<HoroscopesList/>}/>
          <Route path="/about" element= {<About/>} />
        </Routes> 
      </main>
    </div>
    </ThemeProvider>

  );
}

export default App;
