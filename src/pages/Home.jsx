import { useState, useEffect } from "react";
import TitleH4Component, { TitleH1Component } from "../components/TitulosComponents";
import { NavLink } from "react-router-dom";

const Home = () => {



    const [listaPokemones, setListaPokemones] = useState([]);
    const [pokemonesBuscados, setPokemonesBuscados] = useState('');

    //El Hook useEffect recibe 2 parametros:
    /* 
    1. La funcion a ejecutar
    - Esta funcion se ejecuta en alguno de los siguientes casos: 
        1. Cuando el componente se carga por primera vez. 
        2. Cuando una dependencia sea modificada. 
    2. La lista de dependencias
    Una dependencia es cualquier valor que se encuentre dentro del componente (property, Una variable de estado, una variable "normal")
     */
    useEffect(() => {
        const consultarPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
                const json = await response.json();
                console.log(json);
                setListaPokemones(json.results);
            } catch (e) {
                console.log(e);
            }
        }

        consultarPokemons();
    }, []);// Si el arreglo de dependencias esta vacio, la funcion a ejecutar Solamente se ejecuta cuando se carga el componente. 
    // }); // Si no mandamos un arreglo de dependencias, la función a ejecutar se ejecuta cada vez que el componente se renderize. 
    //} [a,b]; // Si el arreglo de dependencias tiene valores, entonces la funcion se ejecutara cada vez que el valor de alguna de las dependencias se modifique.
    function leerPokemonesBuscadosInput(event) {
        setPokemonesBuscados(event.target.value);
    }

    const pokemonesFiltrados = listaPokemones.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(pokemonesBuscados.toLowerCase());
    });

    return (
        <>
            <TitleH1Component titulo='Pokedex'></TitleH1Component>

            <TitleH4Component titulo='Buscador' />

            <form>
                <label>Buscar Pokemon</label>
                <input type="text"
                    value={pokemonesBuscados}
                    onChange={leerPokemonesBuscadosInput} />
            </form>
            <div className="container">
                <div className="row">
                    {
                        pokemonesFiltrados.map((pokemon, index) => {
                            return (
                                /* 
                                https://pokeapi.co/api/v2/pokemon/1/
                                Separador = /
                                [https:""
                                ""
                                "pokeapi.com"
                                "api"
                                "v2"
                                "pokemon"
                                "1"
                                ]
                                 */


                                <div key={index} className="col-3 p-3">
                                    <div className="card sombra" style={{ width: "18rem" }}>
                                        <NavLink to={`/pokemonDetail/${pokemon.url.split('/')[6]}`}>
                                            <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                                                className="card-img-top" alt="..." />
                                        </NavLink>
                                        <div className="card-body">
                                            <NavLink to={`/pokemonDetail/${pokemon.url.split('/')[6]}`}>
                                                <h5 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div >

            <NavLink to='/about'>
                <p>Acerca de</p>
            </NavLink>

        </>
    )
}

export default Home;