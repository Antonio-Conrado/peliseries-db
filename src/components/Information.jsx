import { useParams } from "react-router-dom";
import configHeaders from "../config/configHeaders";
import axiosClient from "../config/axios";
import { useEffect, useState } from "react";
import Cast from "./Cast/Cast";


const Information = ({ movie }) => {
    const { id } = useParams()
    const { genres, vote_average } = movie;
    const [keyTrailer, setTrailer] = useState(undefined);

    
        const trailer = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=es-US`;
                const { data } = await axiosClient(url, configHeaders);
                
                if(data.results.length === 0){
                    const urlEN = `https://api.themoviedb.org/3/movie/${id}/videos`;
                    const dataEN = await axiosClient(urlEN, configHeaders);
                    dataEN.data.results.map(info => {
                        if (info.type === "Trailer"){
                            setTrailer(info.key);
                        } 
                    })
                }else{
                    data.results.map(info => {
                        console.log(info)
                        if (info.type === 'Trailer'){
                            if (info.name.split(" ")[0].includes("Trailer") || info.name.split(" ")[0].includes("Tráiler")) {
                                setTrailer(info.key);
                            }
                        }
                    })
                }
                
                
            } catch (error) {
                console.log(error)
            }
        };

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        
        trailer();
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    console.log(keyTrailer)

    return (
        <>
            <section className=" mt-3 ">
                <div className="genres-header">
                    <h1 className="text-white   sm:relative  text-center md:text-right lg:text-center text-lg font-bold">{movie.title}</h1>
                    <div className=" flex justify-center  mr-0  mt-2 md:mt-0">
                        <button
                            className="text-white bg-green-600  md:p-4 rounded-md p-2 mx-auto"
                            onClick={openModal}
                        >
                            Ver Trailer
                        </button>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className=" relative bg-slate-950 m-2  max-w-md w-full">


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-x absolute right-0 pl-4 cursor-pointer "
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ff4500"
                                fill="none"
                                onClick={closeModal}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>


                            <div className="w-full h-80 ">
                                <iframe
                                    className="w-full h-full"
                                    title="trailer"
                                    src={`https://www.youtube.com/embed/${keyTrailer}`}
                                    allowFullScreen
                                    allow="autoplay"
                                ></iframe>
                            </div>


                        </div>
                    </div>
                )}
            </section>


            <section>
                <div className="genres-grid mt-3  w-full">
                    {genres ?
                        <>
                            <div></div>
                            <ul className="relative flex flex-wrap gap-2 justify-center sm:gap-4 ">
                                {genres.map(info => (

                                    <li
                                        key={info.id}
                                        className=" text-white p-2 text-center bg-gray-800 rounded-md"
                                    >
                                        {info.name}
                                    </li>

                                ))}
                            </ul>
                        </>
                        :
                        null
                    }

                </div>
            </section>

            <section className="mt-2">
                <div></div>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center ">
                        {vote_average ? <p className="text-gray-300  text-justify p-4">{vote_average.toString().slice(-0, -2)}</p> : null}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-yellow-400 text-sm mb-[1px]" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                        </svg>
                    </div>
                    <div className="bg-white p-1  rounded-full"></div>
                    <p className="text-gray-300  text-justify p-4">{movie.release_date}</p>

                </div>


            </section>
            <div className="grid-overview">
                <div></div>
                <p className="text-gray-300  text-justify px-6"><span className="font-bold ">Sinópsis: </span>{movie.overview}</p>
            </div>
            
            {movie.id
                ?
                <Cast
                    movie_id={movie.id}
                />
                :
                null
            }
        </>
    );
};
export default Information;