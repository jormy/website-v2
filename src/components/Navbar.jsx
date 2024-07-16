import { Link } from "react-router-dom"
import NowPlaying from "./spotify/NowPlaying"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between max-w-4xl px-8">
                <nav className="flex-1 flex space-x-10 text-denim-200 text-lg">
                    <Link to="/">/</Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/contact">contact</Link>
                </nav>
                <NowPlaying />
            </div>
        </>

    );
}

export default Navbar;