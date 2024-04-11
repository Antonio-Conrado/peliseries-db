import { useEffect, useState } from "react";
import axiosClient from "../config/axios";
import configHeaders from "../config/configHeaders";

//components
import Header from "../components/LayoutComponents/Header";
import Carousel from "../components/Carousel";

const Index = () => {
    const [moviesImg, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [series, setPopularSeries] = useState([]);
    const [topRated, setTopRated] = useState([]);

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
    }, []);


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
    return (
        <>
            <Header
                data={moviesImg}
            />
            <main className="sm:mt-10">
                <Carousel
                    data={popular}
                    title='Películas Populares'
                    name='popular'
                    link= 'peliculas-populares'
                />

                {/* <Carousel
                    data={series}
                    title='Series Populares'
                    name='popularSeries'
                    link = 'series-populares'
                /> */}

                <Carousel
                    data={topRated}
                    title='Lo más visto'
                    name='topRated'
                    link='mejor-valorados'
                />

            </main>
        </>
    );
};

export default Index;