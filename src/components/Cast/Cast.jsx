import { useEffect, useState } from "react";
import axiosClient from "../../config/axios";
import configHeaders from "../../config/configHeaders";
import useScroll from "../../hooks/useScroll";

import ScrollLeft from "../ScrollNavigation/ScrollLeft";
import ScrollRight from "../ScrollNavigation/ScrollRight";
import Actor from "./Actor";

const Cast = ({movie_id}) => {
    const [cast, setCast] = useState([])
    useEffect(() => {
        const getCast = async () => {

            const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
            const { data } = await axiosClient(url, configHeaders);
            setCast(data.cast);
        };
        getCast();
    }, []);
    
    const { containerRefCast } = useScroll();

    return (  
        <section className="container mx-auto mt-10 relative">
            <ScrollRight
                value='cast'
            />
            <ScrollLeft
                value='cast'
            />
            <div className="flex justify-center mb-2 ">
                <div className="bg-green-400  w-1 mr-2"></div>
                <p
                    className="text-white block text-center font-bold text-2xl  hover:cursor-pointer"
                >Actores</p>
            </div>

            <div
                ref={containerRefCast}
                className="my-2 mx-9 p-2 h-auto section flex flex-row gap-3"
            >

                {cast.slice(0,10).map(actor => (
                    <Actor
                        key={actor.id}
                        actor={actor}
                    />
                ))}
            </div>
        </section>
    );
}
export default Cast;