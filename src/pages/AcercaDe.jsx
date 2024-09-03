import { NavLink } from "react-router-dom"

const AcercaDe = () => {
    return (
        <>
            <h1>Acerca de...</h1>
            <p>Esta aplicacion fue desarrollada para la clase de Intro a FrontEnd</p>

            <NavLink to='/'>
                <h4>Regresar a pagina principal</h4>
            </NavLink>
        </>
    )
}

export default AcercaDe