import useScroll from "../../hooks/useScroll";
import PropTypes from 'prop-types';

const ScrollLeft = ({value}) => {
    const { handleScroll } = useScroll();
    return (
        <div className="absolute inset-y-0 left-0 hidden sm:flex items-center justify-center  ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="leftarrow arrowbtn bi-chevron-left  bg-gray-800 opacity-50 w-10 h-10 rounded-full relative right hover:cursor-pointer  "
            viewBox="0 0 16 16"
            stroke="#fff"
            onClick={() => handleScroll(-350,value)}
        >
            <path fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
    </div>
    );
};

ScrollLeft.propTypes={
    value : PropTypes.string.isRequired
};
export default ScrollLeft;