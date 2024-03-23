import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        console.log('si')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <nav className="h-96 sm:h-auto flex flex-col sm:flex-row justify-center  items-center gap-2 relative  py-4">
            <h1 className="text-white text-2xl font-bold hover:text-gray-300 mb-4 sm:mb-0 text-center ">
                <Link to={'/'} > PeliSeries-DB</Link>
            </h1>

            <Link
                className="text-white text-center p-2 mx-2 flex gap-1 items-center hover:text-gray-300"
                to={"/movies"}
            >Películas</Link>
            <Link
                className="text-white text-center p-2 mx-2 flex gap-1 items-center hover:text-gray-300"
                to={"/series"}
            >Series</Link>

            {/* search */}
            <div className="relative">
                <input
                    type="text"
                    className="rounded-md p-2 "
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ingresa tu búsqueda"
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search absolute top-2 right-2 hover:cursor-pointer " width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    onClick={handleSearch}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </div>
            {/* end search */}

            <Link
                className=" text-white text-center p-2 mx-2 flex gap-1 items-center hover:text-gray-300"
                to={"/login"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user h-8"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke="#00abfb"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                Iniciar Sesión
            </Link>
        </nav>
    );
}

export default Nav;