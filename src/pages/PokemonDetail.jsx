import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gradientsByType, bgByType } from "../constants/pokemon";
import Header from "../components/Header";

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState(null);
    const {id} = useParams();

    const getStatPercentage = stat => {
        const statPercent = (stat / 255) * 100;
        console.log(statPercent);
        return statPercent + "%";
    }

    useEffect(() => {
        console.log("pokemon id: ", id);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .then(({data}) => setPokemon(data))
             .catch(err => console.error("Error", err));
        
        console.log(pokemon);
    }, [])

    return (
    <section>
        <Header /> 
        <article className="text-center max-w-[650px] mx-auto my-5">
            <header className={`reltive h-[150px] ${gradientsByType[pokemon?.types[0].type.name]} mt-10 mb-5`}>
                <img className="absolute top-0 translate-y-[20%] w-full right-0 left-0 h-[250px] object-scale-down p-12" src={pokemon?.sprites.other["official-artwork"].front_default} alt=""/>
            </header>
            <span># {pokemon?.id}</span>
            <h3 className="capitalize "><b>{pokemon?.name}</b></h3>
            <div className="flex justify-around my-5">
                <div>
                    <h5>Weight</h5>
                    <span>{pokemon?.weight}</span>
                </div>
                <div>
                    <h5>Height</h5>
                    <span>{pokemon?.height}</span>
                </div>
            </div>
            <div className="flex justify-around items-center my-6">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h3>Type</h3>
                    <ul className="flex justify-between items-center gap-12">
                        {
                            pokemon?.types.map(type => (
                                <li className={`capitalize ${bgByType[type.type.name]} p-1 rounded-md text-white`} key={type.type.name}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h3>Moves</h3>
                    <ul className="flex justify-evenly items-center gap-12">
                        {
                            pokemon?.moves.map((move, i) => i < 2 ? <li className="capitalize bg-slate-300 rounded-md p-1" key={move.move.name}>{move.move.name}</li> : "")
                        }
                    </ul>
                </div>
            </div>
            <section>
                <h4 className="underline">Stats</h4>
                <ul className="grid gap-3">
                    {
                        pokemon?.stats.map(stat => (
                            <li key={stat.stat.name}>
                                <div className="flex justify-between">
                                    <h5 className="capitalize">{stat.stat.name}</h5>
                                    <span>{stat.base_stat}/255</span>
                                </div>

                                {/* contenedor barra de progreso */}
                                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                                    {/* barra de progreso */}
                                    <div
                                        className="h-full w-[50%] bg-gradient-to-r from-orange-400 to-yellow-400"
                                        style={{
                                            width: getStatPercentage(stat.base_stat)
                                        }}>
                                    </div>
                                </div>
                            </li>))
                    }
                </ul>
            </section>
        </article>
    </section>
    )
}
export default PokemonDetail