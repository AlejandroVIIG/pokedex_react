import { useEffect, useState } from "react";
import { paginatePokemons } from "../utils/pagination";
import Pagination from "./Pagination";
import PokemonPreview from "./PokemonPreview"
import { current } from "@reduxjs/toolkit";

const PokemonList = ({pokemons}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const {pokemonInPage, lastPage, pagesInCurrentBlock} = paginatePokemons(pokemons, currentPage);
    console.log("PokemonList", pagesInCurrentBlock);

    useEffect(() => {
        setCurrentPage(1);
    }, [pokemons]);

    return (
        <section>
            <section className="grid grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto gap-4 py-10">
                {
                    pokemonInPage.map(pokemon => <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url} />)
                }
            </section>
            <Pagination
                lastPage={lastPage}
                pagesInCurrentBlock={pagesInCurrentBlock}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
        </section>
    )
}
export default PokemonList