import { BrowserRouter, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import RoutesIndex from './routes/RoutesIndex'
import NavBarComponent from './components/NavBarComponent'



function App() {

  return (
    //Debemos utilizar el elemento BowserRouter para leer lo que esta en la URL. 
    <BrowserRouter>
      <NavBarComponent />
      <RoutesIndex />
    </BrowserRouter>

  )
}

export default App
