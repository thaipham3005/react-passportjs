import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllRoutes from './pages/routes/AllRoutes';
import Socials from './components/Socials'
import Footer from './components/Footer';
import { ThemeContext } from './context/Theme.provider'
import { useContext } from 'react'
import { firebaseApp } from 'firebase/app';

function App() {
  const { themeState: { theme } } = useContext(ThemeContext)

  return (
    <div id="App" className={theme}>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>

  );
}

export default App;
