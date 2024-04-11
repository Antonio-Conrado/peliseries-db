import Nav from "./LayoutComponents/Nav";
import { useState } from "react";

const BackgroundHeader = ({ movie}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageLogo, setImageLogo] = useState(false)

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    const handleImageLogo = () => {
        setImageLogo(true);
    };
    return (
        <header className="relative w-full h-background ">

            <div className="absolute overflow-hidden h-background flex section">

                {!imageLoaded && (
                    <img src="/header.avif" alt="logo" className="h-img object-cover opacity-65 object-center pointer-events-none" />
                )}
                {movie.backdrop_path && (
                    <img
                        className={`h-img object-cover opacity-65 object-center pointer-events-none ${imageLoaded ? 'opacity-100' : 'opacity-65'}`}
                        src={`https://image.tmdb.org/t/p/original///${movie.backdrop_path}`}
                        alt="Background Image"
                        onLoad={handleImageLoaded}
                    />
                )}

            </div>
            <div className="relative bottom-10 sm:bottom-0">
                <Nav />
            </div>

            <div className=" flex pl-0 sm:pl-10 justify-center h-52 md:h-60 md:w-fit sm:justify-normal items-end">
                {!imageLogo && (
                    <img
                        src="/logo.png"
                        className="absolute rounded-lg top-72 border-2 lg:top-96 w-40 h-52 md:h-60"
                        alt="image"
                    />

                )}
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        className="absolute rounded-lg top-72 lg:top-96 md:w-fit h-52 md:h-60"
                        alt="image"
                        onLoad={handleImageLogo}
                    />
                )}


            </div>
        </header>

    );
};
export default BackgroundHeader;