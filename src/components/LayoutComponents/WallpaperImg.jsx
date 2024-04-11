import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WallpaperImg = ({ info, isActive }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    return (
        <div className={isActive ? 'block' : 'hidden'} style={{ position: 'relative' }}>

            {!imageLoaded && (
                <img src="/header.avif" alt="img" className="h-img object-cover opacity-65 object-center pointer-events-none" />
            )}
            {info.backdrop_path && (

                <img
                    className={`h-img object-cover opacity-65 object-center pointer-events-none ${imageLoaded ? 'opacity-100' : 'opacity-65'}`}
                    src={`https://image.tmdb.org/t/p/original///${info.backdrop_path}`}
                    alt="image"
                    onLoad={handleImageLoaded}
                />
            )}

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
