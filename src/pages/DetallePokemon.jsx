import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetallePokemon = () => {

    const [detallePokemon, setDetallePokemon] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const consultarDetalles = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                const json = await response.json();
                console.log(json);
                setDetallePokemon(json);
            } catch (e) {
                console.log(e);
            }
        }

        consultarDetalles();
    }, []);

    return (
        <>
            <h1>Detalles del pokemon</h1>
            <h2>{detallePokemon?.name.charAt(0).toUpperCase() + detallePokemon?.name.slice(1)}</h2>
            <table class="table table-hover table-striped-columns">
                <thead>
                    <th>Estadística</th>
                    <th>Valor</th>
                </thead>
                <tbody>

                
                {
                    detallePokemon?.stats.map((stat, index) => {
                        return (<tr key={index}>
                            <td>{stat.stat.name} </td>
                            <td>{stat.base_stat}</td>
                            
                            </tr>)
                    })
                }
                </tbody>
            </table>

            <NavLink to='/'>
                <h4>Regresar a pagina principal</h4>
            </NavLink>
        </>
    )

}

export default DetallePokemon;