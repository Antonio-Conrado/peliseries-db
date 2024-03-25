import { useState, useEffect } from "react";
import axiosClient from "../../config/axios";
import { Link } from "react-router-dom";
import configHeaders from "../../config/configHeaders";
import useScroll from "../../hooks/useScroll";


//components
import ScrollLeft from "../ScrollNavigation/ScrollLeft";
import ScrollRight from "../ScrollNavigation/ScrollRight";
import Top from './Top';


const TopRated = () => {
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const getTopRated = async () => {

            try {
                const url = `https://api.themoviedb.org/3/movie/top_rated?language=es-US&page=1`;
                const { data } = await axiosClient(url, configHeaders);
                setTopRated(data.results);
            } catch (error) {
                console.log(error)
            }
        };

        getTopRated();
    }, [topRated]);


    const { containerRefTopRated } = useScroll();
    return (
        <section className="container mx-auto mt-2 relative">
            <ScrollRight
                value={'topRated'}
            />
            <ScrollLeft
                value={'topRated'}
            />
            <div className="flex justify-center mb-2">
                <div className="bg-green-400  w-1 mr-2"></div>
                <Link
                    className="text-white block text-center font-bold text-2xl hover:text-gray-300 hover:cursor-pointer"
                    to={'/topRated'}
                >Los más valorados</Link>
            </div>

            <div
                ref={containerRefTopRated}
                className="my-2 mx-9 p-2 h-auto section  flex flex-row gap-3"
            >

                {topRated.map(info => (
                    <Top
                        key={info.id}
                        top={info}
                    />
                ))}
            </div>
        </section>
    );
};
export default TopRated;