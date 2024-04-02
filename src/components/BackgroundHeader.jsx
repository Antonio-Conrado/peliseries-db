import Nav from "./LayoutComponents/Nav";

const BackgroundHeader = ({ movie }) => {
    return (
        <header className="relative w-full h-background ">
            
            <div className="absolute overflow-hidden h-background flex section">
            <img
                className="h-img object-cover opacity-65 object-center pointer-events-none"
                src={`https://image.tmdb.org/t/p/original///${movie.backdrop_path}`}
                alt="Background Image"
            />
            
            </div>
            <div className="relative bottom-10 sm:bottom-0"> 
                <Nav/>
            </div>
            
            
            <div className=" flex pl-0 sm:pl-10 justify-center sm:justify-normal items-end">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Popular Movie Poster"
                className="absolute rounded-lg top-72 lg:top-96 md:w-fit h-52 md:h-60"
            /> 
            </div>
        </header>

    );
};
export default BackgroundHeader;