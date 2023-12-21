import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setTrainerName(e.target.trainerName.value));
        navigate("/pokedex");
    }

    return (
    <section className="grid grid-rows-[1fr,_auto] h-screen overflow-hidden">
        <div className="text-center justify-self-center self-center">
            <header>
                <img src="../images/pokedex.png" alt=""/>
            </header>
            <h3 className="text-red-500 font-semibold text-5xl mb-3">Hello trainer</h3>
            <p>Enter your name to start</p> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="trainerName"
                    placeholder="Your name is..."
                    autoComplete="off" 
                    required
                />
                <button type="submit" className="bg-red-500 text-white text-xl px-3 rounded-md">Start</button>
            </form>
        </div>
        <Footer />
    </section>
    )
}
export default Home