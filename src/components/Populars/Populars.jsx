import { useState, useEffect } from "react";
import axiosClient from "../../config/axios";
import { Link } from "react-router-dom";
import configHeaders from "../../config/configHeaders";
import useScroll from "../../hooks/useScroll";


//components
import ScrollLeft from "../ScrollNavigation/ScrollLeft";
import ScrollRight from "../ScrollNavigation/ScrollRight";
import Popular from "./Popular";

const Populars = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const getPopular = async () => {

            try {
                const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc`;
                const { data } = await axiosClient(url, configHeaders);
                setPopular(data.results);
            } catch (error) {
                console.log(error)
            }
        };

        getPopular();
    }, [popular]);

    const { containerRefPopular } = useScroll();

    return (
        <section className="container mx-auto mt-2 relative">
            <ScrollRight
                value='popular'
            />
            <ScrollLeft
                value='popular'
            />
            <div className="flex justify-center mb-2 ">
                <div className="bg-green-400  w-1 mr-2"></div>
                <Link
                    className="text-white block text-center font-bold text-2xl  hover:cursor-pointer"
                    to={'/peliculas-populares'}
                >Películas Populares</Link>
            </div>

            <div
                ref={containerRefPopular}
                className="my-2 mx-9 p-2 h-auto section flex flex-row gap-3"
            >

                {popular.map(info => (
                    <Popular
                        key={info.id}
                        popular={info}
                    />
                ))}
            </div>
        </section>
    );
};
export default Populars;