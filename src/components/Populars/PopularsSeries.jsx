import { useState, useEffect } from "react";
import axiosClient from "../../config/axios";
import { Link } from "react-router-dom";
import configHeaders from "../../config/configHeaders";
import useScroll from "../../hooks/useScroll";


//components
import ScrollLeft from "../ScrollNavigation/ScrollLeft";
import ScrollRight from "../ScrollNavigation/ScrollRight";
import PopularSerie from "./PopularSerie";

const PopularsSeries = () => {
    const [popularSeries, setPopularSeries] = useState([]);

    useEffect(() => {
        const getPopular = async () => {

            try {
                const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=es-US&page=1&sort_by=popularity.desc`;
                const { data } = await axiosClient(url, configHeaders);
                setPopularSeries(data.results);
            } catch (error) {
                console.log(error)
            }
        };

        getPopular();
    }, [popularSeries]);

    const { containerRefPopularSeries } = useScroll();

    return (
        <section className="container mx-auto mt-5 relative">
            <ScrollRight
                value='PopularSeries'
            />
            <ScrollLeft
                value='PopularSeries'
            />
            <Link
                className="text-white block text-center font-bold text-2xl hover:text-gray-300 hover:cursor-pointer"
                to={'/popular'}
            >Series Populares</Link>
            <div
                ref={containerRefPopularSeries}
                className="my-2 mx-4 p-2 h-auto section grid grid-cols-2 gap-4 sm:flex sm:flex-row "
            >

                {popularSeries.map(info => (
                    <PopularSerie
                        key={info.id}
                        popular={info}
                    />
                ))}
            </div>
        </section>
    );
};
export default PopularsSeries;