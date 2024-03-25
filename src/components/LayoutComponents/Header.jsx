import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
//components
import Nav from "./Nav";
import WallpaperImg from './WallpaperImg';

const Header = ({ data }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = imgIndex + direction;

            if (nextIndex === data.length) {
                // If we reach the end, we change the direction to negative to go back
                setDirection(-1);
                nextIndex = data.length - 1;
            } else if (nextIndex === -1) {
                // If we reach the beginning, we change the direction to positive to move forward
                setDirection(1);
                nextIndex = 0;
            } else {
                // We maintain the current direction if we have not reached the end or the beginning
                setImgIndex(nextIndex);
            }

        }, 10000);

        return () => clearInterval(interval);
    }, [data.length, direction, imgIndex]);

    const handleScroll = (direction)=>{
        let nextIndex = imgIndex + direction;

        if (nextIndex >= data.length) {
            nextIndex = 0; // If we reach the end, go back to the beginning
        } else if (nextIndex < 0) {
            nextIndex = data.length - 1; // If we are at the beginning, go to the end
        }

        setImgIndex(nextIndex);
    }

    return (
        <header className='relative w-full h-header'>
            <div className='absolute overflow-hidden flex h-header section'>
                {data.map((info, index) => (
                    <WallpaperImg
                        key={info.id}
                        info={info}
                        style={{
                            transform: `translateX(-${imgIndex * 100}%)`,
                            transition: 'transform 2.5s ease'
                        }}
                        isActive={index === imgIndex}
                    />
                ))}
            </div>
            <Nav />

            <div className="absolute inset-y-0 right-0  flex  items-center justify-center ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="rightarrow rightarrowindex arrowbtn bi-chevron-right bg-gray-800 opacity-50 w-10 h-10 rounded-full relative right hover:cursor-pointer "
                    viewBox="0 0 16 16"
                    stroke="#fff"
                    onClick={() => handleScroll(1)}
                >
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>

            </div>

            <div className="absolute inset-y-0 left-0  flex items-center justify-center  ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="leftarrow arrowbtn bi-chevron-left  bg-gray-800 opacity-50 w-10 h-10 rounded-full relative right hover:cursor-pointer  "
                    viewBox="0 0 16 16"
                    stroke="#fff"
                    onClick={() =>handleScroll(-1)}
                >
                    <path fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </div>

        </header>
    );
};
Header.propTypes = {
    data: PropTypes.array.isRequired
};
export default Header;


