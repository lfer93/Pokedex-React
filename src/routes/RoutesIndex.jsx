import { Route, Routes } from 'react-router-dom'
import AcercaDe from '../pages/AcercaDe'
import Home from '../pages/Home'
import DetallePokemon from '../pages/DetallePokemon'
import { useEffect, useState } from 'react'
import Template from '../pages/Template'


//el primer elemento para trabajar con rutas con React-Router-dom es crear un indice de rutas 
//Esto se hace con el elemento Routes importado de react-router-dom, y este elemento tiene hijos de elementos Ropute.
// Cada elemento Route tiene el componente a cargar, y la ruta o URL asociada a esa pantalla
const RoutesIndex = () => {

    const [apiRoutes, setApiRoutes] = useState([]);

    useEffect(() => {
        const response = ['/ability', '/generation']
        setApiRoutes(response);
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Home />}/> { /* Esta linea nos dice que se cargue la page Home cuando estemos en la ruta / (diagonal) */}
            <Route path='/about' element={<AcercaDe />}/> {/* Esta linea nos dice que se cargue la page AcercaDe cuando estemos en la ruta /about} */ }
            <Route path='/pokemonDetail/:id' element={<DetallePokemon/>} />
            {
                apiRoutes.map((route, index) => {
                    return <Route key={index} path={route} element={<Template route={route}/>}></Route>
                })
            }
        </Routes>
    )
}

export default RoutesIndex