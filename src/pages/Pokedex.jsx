import { useSelector } from "react-redux"
import PokemonList from "../components/PokemonList";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Pokedex = () => {
    
    const [allPokemon, setAllPokemon] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState([]);

    const trainerName = useSelector(store => store.trainerName);

    const pokemonByName = allPokemon.filter(pokemon => pokemon.name.includes(pokemonName));

    const handleSubmit = e => {
        e.preventDefault();
        setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
    }

    const handleChange = e => {
        const url = e.target.value
        axios.get(url)
             .then(({data}) => {
                if(url.includes("pokemon")){
                    setAllPokemon(data.results)
                }else{
                    const pokemonArr = data.pokemon.map(p => p.pokemon);
                    setAllPokemon(pokemonArr);
                }
             })
             .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")
             .then(({data}) => setAllPokemon(data.results))
             .catch(err => console.err(err));
    }, []);
    
    useEffect(() => {
        axios.get("http://pokeapi.co/api/v2/type")
             .then(({data}) => setTypes(data.results))
             .catch(err => console.error(err));
    },[]);

    return (
        <section>
            <Header />
            <p className="text-2xl">
                Welcome <b className="text-red-500 font-semibold">{trainerName}</b>, here you can find your favorite Pokemon!
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
                <div className="my-3">
                    <input
                        name="pokemonName"
                        type="text"
                        placeholder="Search pokemon..."
                        className="p-1 shadow-md shadow-slate-500"/>
                    <button className="bg-red-500 rounded-sm text-white text-4xl py-1 px-5" type="submit">Search</button>
                </div>
                <select onChange={handleChange} className="border border-slate-200 bg-white p-2 shadow-md shadow-slate-500/50">
                    <option value="https://pokeapi.co/api/v2/pokemon?limit=1292" className="p-2">All Pokemons</option>
                    {
                        types.map(type => <option className="capitilize" value={type.url} key={type.name}>{type.name}</option>)
                    }
                </select>
            </form>
            <PokemonList pokemons={pokemonByName}/>
        </section>
    )
}
export default Pokedex