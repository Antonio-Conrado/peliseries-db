import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Popular = ({ popular }) => {
    const { title, vote_average, release_date, id, poster_path } = popular;

    return (
        <div className=" flex-shrink-0 w-full sm:w-52 rounded-lg  ">


            <div className="flex justify-center">
                <Link to={`/movieDetails/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="popular"
                        className="rounded-lg h-52 "
                    />
                </Link>

            </div>


            <div className=" rounded-b-lg p-2 ">
                <Link to={`/movieDetails/${id}`}>
                    <h3 className="text-center  text-white text-lg py-2 font-bold">{title}</h3>
                </Link>

                <ul>
                    <li className="font-bold text-white text-center">
                        Fecha: <span className="font-normal"> {release_date}</span>
                    </li>
                    <li className="font-bold text-white flex items-center justify-center">
                        Calificación: <span className="font-normal"> {vote_average}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star ml-2" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg>
                    </li>
                </ul>

            </div>
        </div>
    );
};

Popular.propTypes={
    popular : PropTypes.object.isRequired
};
export default Popular;