import { useEffect, useState } from "react";
import axiosClient from "../config/axios";
import configHeaders from "../config/configHeaders";

//components
import Populars from "../components/Populars/Populars";
import TopRated from "../components/TopRated/TopRated";
import PopularsSeries from "../components/Populars/PopularsSeries";
import Header from "../components/LayoutComponents/Header";

const Index = () => {
    const [moviesImg, setMovies] = useState([]);

    useEffect(() => {
        const getImg = async () => {
            try {
                const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';

                const { data } = await axiosClient(url, configHeaders);
                setMovies(data.results)
            } catch (error) {
                console.log(error);
            }
        };
        getImg();

    }, []);

    return (
        <>
            <Header
                data={moviesImg}
            />
            <main className="sm:mt-10">
                <Populars />
                <TopRated />
                <PopularsSeries />
            </main>
        </>
    );
};

export default Index;