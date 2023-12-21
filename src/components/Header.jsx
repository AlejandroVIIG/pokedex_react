const Header = () => {
    return (
        <header>
            <div className="relative h-14 bg-red-500">
                <div className="absolute w-[250px] sm:w-[300px] -bottom-1 left-2" >
                    <img src="/images/pokedex.png" alt="" />
                </div>
            </div>
            <div className="h-10 bg-black"></div>
            <div className="absolute z-20 top-0 w-[80px] mx-auto right-0 -translate-x-[20%] bottom-0">
                <img src="/images/small_pokeball.png" alt="pokeball"/>
            </div>
        </header>
    )
}
export default Header