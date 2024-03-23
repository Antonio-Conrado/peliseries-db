import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WallpaperImg = ({ info, isActive }) => {
    return (
        <div className={isActive ? 'block' : 'hidden'} style={{ position: 'relative' }}>
            <img
                className="h-img object-cover opacity-65 object-center pointer-events-none"
                src={`https://image.tmdb.org/t/p/original///${info.backdrop_path}`}
                alt="..."
            />
            <div className=' flex w-full justify-center absolute top-72 md:top-80 '>
                <Link
                    to={`/movieDetails/${info.id}`}
                    className="text-center my-8 sm:my-0 text-white text-md py-2 font-bold hover:text-gray-300"
                >
                    {info.title}
                </Link>
            </div>
        </div>
    );
};

WallpaperImg.propTypes = {
    info: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired
};
export default WallpaperImg;
