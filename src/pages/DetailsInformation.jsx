import BackgroundHeader from "../components/BackgroundHeader";
import axiosClient from "../config/axios";
import configHeaders from "../config/configHeaders";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Information from "../components/Information";

const DetailsInformation = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const getMovie = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${id}?language=es-US`
                const { data } = await axiosClient(url, configHeaders);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovie();
    }, []);
    
    return (
        <>
            <BackgroundHeader 
                movie={movie}
            />
            <Information 
                movie={movie}
            /> 
        </>

    );
};
export default DetailsInformation;