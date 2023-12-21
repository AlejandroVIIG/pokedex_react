 const paginatePokemons = function(pokemons, currentPage) {
    
    // cantidad de pokemon por pagina
    const POKEMONS_PER_PAGE = 20;

    // pokemon que se renderizan en pagina actual
    const sliceEnd = currentPage * POKEMONS_PER_PAGE;
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE;
    const pokemonInPage = pokemons.slice(sliceStart, sliceEnd);

    // cantidad de paginas
    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);
    console.log(lastPage);

    // bloque de paginas actual
    const PAGES_PER_BLOCK = 7;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

    // paginas que se muestran en el bloque actual
    const pagesInCurrentBlock = [];
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;
    for(let i = minPage; i <= maxPage; i++) {
        if(i <= lastPage) {
            console.log(i);
            pagesInCurrentBlock.push(i);
        } 
    }

    return {pokemonInPage, lastPage, pagesInCurrentBlock}
}

export { paginatePokemons };